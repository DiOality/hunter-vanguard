const FONT = 'monospace'
const FONT_SIZE = 10
const FONT_OFFSET = 2

export function drawBoxText (ctx, box, colour, name) {
  const text = `x: ${box.x}, y:  ${box.y}, w:  ${box.w}, h:  ${box.h}`
  ctx.fillStyle = colour
  ctx.font = `${FONT_SIZE}px ${FONT}`

  ctx.fillText(name, box.x + FONT_OFFSET, box.y + FONT_SIZE + FONT_OFFSET)
  ctx.fillText(text, box.x + FONT_OFFSET, box.y + FONT_SIZE + FONT_SIZE + FONT_OFFSET)
}
