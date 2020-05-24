function range(start, end, step) {
  let results = [];

  if (start === undefined || end === undefined || step === undefined)
    return results;
  if (start > end) return results;
  if (step < 0) return results;

  for (var i = 0; i < (end - start) / step + 1; i++) {
    results.push(start + step * i);
  }
  return results;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
