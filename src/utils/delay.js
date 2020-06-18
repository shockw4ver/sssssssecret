export function delay(ms) {
  return new Promise(ok => setTimeout(ok, ms))
}