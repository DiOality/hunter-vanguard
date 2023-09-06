export default function drawBox (ctx, box, colour) {
  ctx.strokeStyle = colour
  ctx.strokeRect(
    box.x,
    box.y,
    box.w,
    box.h,
  )
}
