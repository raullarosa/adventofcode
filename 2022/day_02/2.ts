// Part 2
// Following the Elf's instructions for the second column,
// what would your total score be if everything goes exactly according to your strategy guide?
// https://adventofcode.com/2022/day/2

const f = await Deno.readTextFile('./input.txt');
const lines = f.split("\n")
const combinationPoints: { [combo: string]: number } = {
  "A X": 3 + 0,
  "B X": 1 + 0, // 1
  "C X": 2 + 0,
  "A Y": 1 + 3, // 4
  "B Y": 2 + 3,
  "C Y": 3 + 3,
  "A Z": 2 + 6,
  "B Z": 3 + 6,
  "C Z": 1 + 6, // 6
}
let score = 0

lines.forEach(line => {
  score += combinationPoints[line]
})

console.log({ score });