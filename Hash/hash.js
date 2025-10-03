const names = ["brad", "chad", "dave", "brad", "brad", "dave"];
const countMap = new Map();

for (let i = 0; i < names.length; i++) {
  if (!countMap.has(names[i])) {
    countMap.set(names[i], 1);
  } else {
    countMap.set(names[i], countMap.get(names[i]) + 1);
  }
}

console.log(countMap); // Map(3) { 'brad' => 3, 'chad' => 1, 'dave' => 2 }
//
