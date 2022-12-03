// Part 1
// What would your total score be if everything goes exactly according to your strategy guide?
// https://adventofcode.com/2022/day/2

const f = await Deno.readTextFile('./input.txt');
const lines = f.split("\n")
const combinationPoints: { [combo: string]: number } = {
  "A X": 1 + 3,
  "B X": 1 + 0, // 1
  "C X": 1 + 6,
  "A Y": 2 + 6, // 8
  "B Y": 2 + 3,
  "C Y": 2 + 0,
  "A Z": 3 + 0,
  "B Z": 3 + 6,
  "C Z": 3 + 3, // 6
}
let score = 0

lines.forEach(line => {
  score += combinationPoints[line]
})

console.log({ score });