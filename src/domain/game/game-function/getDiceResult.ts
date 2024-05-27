export default function getDiceResult(): number {
  const min: number = 1
  const max: number = 6
  return Math.floor(Math.random() * (max - min + 1) + min)
}
