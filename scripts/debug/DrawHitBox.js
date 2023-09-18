import drawDebugBox from './DrawDebugBox.js'

export default function drawHitBox (ctx, box) {
  if (!box) {
    return
  }

  const colour = 'yellow'
  const name = 'Hit'

  drawDebugBox(ctx, box, colour, name)
}
