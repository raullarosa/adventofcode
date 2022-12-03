// Part 2
// Find the item type that corresponds to the badges of each three-Elf group.
// What is the sum of the priorities of those item types ?
// https://adventofcode.com/2022/day/3

const f = await Deno.readTextFile('./input.txt');
const lines = f.split("\n")
const badgeItemTypes: string[] = []
let groupLine = 0

// unique char bank per group with count
let badgesFound: { [badge: string]: number } = {}
lines.forEach(rucksack => {
  // unique char bank per line
  const badgesInRucksack: { [badge: string]: boolean } = {}
  for (let i = 0; i < rucksack.length; i++) {
    const char = rucksack.charAt(i)

    if (!badgesInRucksack[char]) {
      if (!badgesFound[char]) badgesFound[char] = 0
      badgesFound[char] += 1

      // found group's badge type when count hits 3
      if (badgesFound[char] === 3) badgeItemTypes.push(char)
    }
    badgesInRucksack[char] = true
  }

  groupLine += 1
  if (groupLine % 3 === 0) {
    // Reset badges found for next group
    badgesFound = {}
  }
})

let sum = 0
badgeItemTypes.forEach(char => {
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

console.log({ badgeItemTypes });
console.log({ sum });