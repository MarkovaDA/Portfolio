import fs from 'fs'
import opentype from 'opentype.js'

const font = opentype.parse(fs.readFileSync('public/fonts/nicoletta-script-sha.ttf').buffer)
const fontSize = 24
const path = font.getPath('ДМ', 0, 24, fontSize)
const bounds = path.getBoundingBox()
const width = bounds.x2 - bounds.x1
const height = bounds.y2 - bounds.y1
const pad = 1
const scale = Math.min((32 - pad * 2) / width, (32 - pad * 2) / height)
const cx = (bounds.x1 + bounds.x2) / 2
const cy = (bounds.y1 + bounds.y2) / 2
const tx = 16 - cx * scale
const ty = 16 - cy * scale
const pathData = path.toPathData(2)

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338ca"/>
      <stop offset="45%" stop-color="#7e22ce"/>
      <stop offset="100%" stop-color="#db2777"/>
    </linearGradient>
  </defs>
  <g transform="translate(${tx.toFixed(3)} ${ty.toFixed(3)}) rotate(-3 16 16) scale(${scale.toFixed(4)})">
    <path d="${pathData}" fill="url(#g)" stroke="#5b21b6" stroke-width="0.55" stroke-linejoin="round" stroke-linecap="round" paint-order="stroke fill"/>
  </g>
</svg>
`

fs.writeFileSync('public/favicon.svg', svg)
console.log('Wrote public/favicon.svg')
