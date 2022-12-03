// Part 1
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
// https://adventofcode.com/2022/day/1

const f = await Deno.readTextFile('./input.txt');
const lines = f.split("\n")
let mostCalories = 0,
  currentCalories = 0;

while (lines.length) {
  const line = lines.shift()
  currentCalories += parseInt(line || "0")

  if (!line || !lines.length) {
    if (currentCalories > mostCalories) {
      mostCalories = currentCalories
    }
    currentCalories = 0
  }
}

console.log({ mostCalories });