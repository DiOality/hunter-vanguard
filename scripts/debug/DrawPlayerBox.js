import drawDebugBox from './DrawDebugBox.js'

export default function drawPlayerBox (ctx, box) {
  if (!box) {
    return
  }

  const colour = 'purple'
  const name = 'Frame'

  drawDebugBox(ctx, box, colour, name)
}
