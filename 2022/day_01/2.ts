// Part 2
// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
// https://adventofcode.com/2022/day/1

const f = await Deno.readTextFile('./input.txt');
const lines = f.split("\n")
const topThreeCalories = [0, 0, 0]
let currentCalories = 0;

function shiftDown(position: number, valueToInsert: number) {
  const temp = topThreeCalories[position]
  topThreeCalories[position] = valueToInsert

  if (position === topThreeCalories.length - 1) return
  shiftDown(position + 1, temp)
}

while (lines.length) {
  const line = lines.shift()
  currentCalories += parseInt(line || "0")

  if (!line || !lines.length) {
    for (let position = 0; position < topThreeCalories.length; position++) {
      if (currentCalories > topThreeCalories[position]) {
        shiftDown(position, currentCalories)
        break
      }
    }
    currentCalories = 0
  }
}

console.log({ sum: topThreeCalories.reduce((partialSum, a) => partialSum + a, 0) });