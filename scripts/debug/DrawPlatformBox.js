import drawDebugBox from './DrawDebugBox.js'

export function drawPlatformBox (ctx, box) {
  if (!box) {
    return
  }

  const colour = 'red'
  const name = 'Platform'

  drawDebugBox(ctx, box, colour, name)
}
