// Part 1
// Find the item type that appears in both compartments of each rucksack.
// What is the sum of the priorities of those item types ?
// https://adventofcode.com/2022/day/3

const f = await Deno.readTextFile('./input.txt');
const lines = f.split("\n")
const duplicates: string[] = []

lines.forEach(rucksack => {
  const items: { [key: string]: boolean } = {}
  const firstCompartmentLimit = rucksack.length / 2

  for (let i = 0; i < rucksack.length; i++) {
    const char = rucksack.charAt(i)
    if (i < firstCompartmentLimit) {
      // create object to reference of first half
      items[char] = true
    } else if (items[char]) {
      duplicates.push(char)
      break
    }
  }
})

let sum = 0
duplicates.forEach(char => {
  const charCode = char.charCodeAt(0)
  let score = 0

  if (charCode >= 97) {
    // lowercase 1 - 26
    score = charCode - 96
  } else {
    // uppercase 27 - 52
    score = charCode - 64 + 26
  }

  sum += score
})

console.log({ duplicates });
console.log({ sum });