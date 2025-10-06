/**
 * AutoRepo demo - TypeScript (~40 lines)
 */
function fib(n: number): number[] {
  let a = 0, b = 1;
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}

function stats(arr: number[]) {
  const sum = arr.reduce((s, x) => s + x, 0);
  return { len: arr.length, sum, avg: arr.length ? sum / arr.length : 0, max: Math.max(...arr) };
}

const seq = fib(25);
console.log("TS stats:", stats(seq));
console.log("AutoRepo: TypeScript demo complete.");
