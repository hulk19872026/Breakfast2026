#!/usr/bin/env node
/**
 * generate-icons.mjs
 * Creates all required app icons from scratch using Canvas.
 *
 * Run: node generate-icons.mjs
 * Requires: npm install canvas (already in devDependencies)
 *
 * OR — easier — go to https://realfavicongenerator.net
 * Upload any 512x512 PNG of your logo and download all sizes.
 * Place the files in public/icons/
 */

import { createCanvas } from 'canvas'
import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'

const SIZES = [16, 32, 72, 96, 128, 144, 152, 180, 192, 512]
const OUT_DIR = './public/icons'

mkdirSync(OUT_DIR, { recursive: true })

function generateIcon(size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  // Background — terracotta gradient
  const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
  grad.addColorStop(0, '#E8A020')
  grad.addColorStop(1, '#C4622D')
  ctx.fillStyle = grad

  // Rounded square
  const r = size * 0.2
  ctx.beginPath()
  ctx.moveTo(r, 0)
  ctx.lineTo(size - r, 0)
  ctx.quadraticCurveTo(size, 0, size, r)
  ctx.lineTo(size, size - r)
  ctx.quadraticCurveTo(size, size, size - r, size)
  ctx.lineTo(r, size)
  ctx.quadraticCurveTo(0, size, 0, size - r)
  ctx.lineTo(0, r)
  ctx.quadraticCurveTo(0, 0, r, 0)
  ctx.closePath()
  ctx.fill()

  // Frying pan emoji (as text — simple, renders everywhere)
  ctx.font = `${size * 0.55}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('🍳', size / 2, size / 2 + size * 0.03)

  const buffer = canvas.toBuffer('image/png')
  const filename = size === 32 ? 'favicon-32.png' : size === 16 ? 'favicon-16.png' : `icon-${size}.png`
  writeFileSync(path.join(OUT_DIR, filename), buffer)
  console.log(`✅ Created ${filename} (${size}x${size})`)
}

console.log('\n🍳 Generating app icons...\n')
SIZES.forEach(generateIcon)
console.log('\n✨ All icons created in public/icons/\n')
console.log('Next: Run  npx cap sync  to copy them into the iOS/Android projects.\n')
