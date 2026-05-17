export const CONTINENT_MAP = {
  Europe: [
    'France', 'United Kingdom', 'Greece', 'Sweden', 'Switzerland',
    'Austria', 'Spain', 'Denmark', 'Finland', 'Italy', 'Germany',
    'Norway', 'Netherlands', 'Belgium', 'Hungary', 'Czech Republic',
    'Russia', 'Poland', 'Portugal', 'Ireland',
  ],
  Asia: [
    'Japan', 'China', 'India', 'Malaysia', 'Singapore', 'Vietnam',
    'Thailand', 'South Korea', 'Indonesia', 'Philippines', 'Taiwan',
    'Sri Lanka', 'Nepal', 'Pakistan', 'Bangladesh', 'Myanmar', 'Cambodia',
  ],
  'Middle East': [
    'Israel', 'Turkey', 'Egypt', 'Lebanon', 'Morocco', 'Iran',
    'Saudi Arabia', 'UAE', 'Jordan', 'Syria',
  ],
  Africa: [
    'Morocco', 'Ethiopia', 'Kenya', 'Nigeria', 'South Africa',
    'Ghana', 'Tunisia', 'Senegal', 'Cameroon', 'Tanzania',
  ],
  Americas: [
    'United States', 'Mexico', 'Jamaica', 'Trinidad & Tobago', 'Brazil',
    'Argentina', 'Venezuela', 'Colombia', 'Peru', 'Chile',
    'Dominican Republic', 'Cuba', 'Haiti', 'Guatemala', 'Puerto Rico', 'Canada',
  ],
  Oceania: ['Australia', 'New Zealand', 'Fiji'],
}

export function getContinent(country) {
  for (const [continent, countries] of Object.entries(CONTINENT_MAP)) {
    if (countries.includes(country)) return continent
  }
  return 'Other'
}
