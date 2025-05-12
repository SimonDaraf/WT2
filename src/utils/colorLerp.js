/**
 * Lerps between color1 and color2 depending on the normalized value.
 *
 * @param {string} color1 - The first color value.
 * @param {string} color2 - The second color value.
 * @param {number} t - The normalized value used to blend between the colors.
 * @returns {string} - Returns the resulting color.
 */
export function lerpColor (color1, color2, t) {
  // Gotten using AI. I am no expert in bitwise operations.
  const c1 = parseInt(color1.slice(1), 16)
  const c2 = parseInt(color2.slice(1), 16)

  const r1 = (c1 >> 16) & 0xff
  const g1 = (c1 >> 8) & 0xff
  const b1 = c1 & 0xff

  const r2 = (c2 >> 16) & 0xff
  const g2 = (c2 >> 8) & 0xff
  const b2 = c2 & 0xff

  const r = Math.round(r1 + t * (r2 - r1))
  const g = Math.round(g1 + t * (g2 - g1))
  const b = Math.round(b1 + t * (b2 - b1))

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}
