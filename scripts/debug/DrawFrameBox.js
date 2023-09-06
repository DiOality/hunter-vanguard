import drawDebugBox from './DrawDebugBox.js'

export default function drawFrameBox (ctx, box) {
  if (!box) {
    return
  }

  const colour = 'blue'
  const name = 'Frame'

  drawDebugBox(ctx, box, colour, name)
}

