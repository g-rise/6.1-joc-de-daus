// eslint-disable-next-line prettier/prettier
export default function getResult(dice1: number, dice2: number): 'WIN' | 'LOST' {
  return dice1 + dice2 === 7 ? 'WIN' : 'LOST'
}
