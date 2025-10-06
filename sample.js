/**
 * AutoRepo demo - JavaScript (~50 lines)
 */
function fib(n) {
  let a = 0, b = 1;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}

function stats(arr) {
  return {
    len: arr.length,
    sum: arr.reduce((s, x) => s + x, 0),
    avg: arr.length ? arr.reduce((s, x) => s + x, 0) / arr.length : 0,
    max: Math.max(...arr)
  };
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const seq = fib(30);
console.log("JS stats:", stats(seq));
console.log("Primes:", seq.filter(isPrime));
console.log("Done.");
