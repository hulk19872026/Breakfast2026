import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// ── HEALTH CHECK ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    env: process.env.NODE_ENV || 'development',
    model: 'claude-sonnet-4-20250514',
    apiKey: process.env.ANTHROPIC_API_KEY ? '✅ Set' : '❌ Missing'
  })
})

// ── CLAUDE PROXY ──────────────────────────────────────────────────────────────
app.post('/api/claude', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return res.status(500).json({
      error: 'ANTHROPIC_API_KEY not set. Add it in Railway → Variables.'
    })
  }

  const { messages, system, max_tokens = 900 } = req.body

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens,
        system,
        messages
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Anthropic API error:', data)
      return res.status(response.status).json({
        error: data.error?.message || 'Anthropic API error'
      })
    }

    res.json(data)
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ error: error.message })
  }
})

// ── SERVE REACT BUILD (PRODUCTION) ────────────────────────────────────────────
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))

  // All non-API routes serve the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

// ── START ──────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  const keyStatus = process.env.ANTHROPIC_API_KEY ? '✅ Set' : '❌ Missing — add to .env or Railway Variables'
  console.log('\n🍳  Global Breakfast Bible Server')
  console.log(`    Port        ${PORT}`)
  console.log(`    Environment ${process.env.NODE_ENV || 'development'}`)
  console.log(`    API Key     ${keyStatus}`)
  if (process.env.NODE_ENV !== 'production') {
    console.log(`    Frontend    http://localhost:5173  (run: npm run dev:client)`)
    console.log(`    API         http://localhost:${PORT}/api/health\n`)
  } else {
    console.log(`    App         http://localhost:${PORT}\n`)
  }
})
