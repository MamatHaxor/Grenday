#!/usr/bin/env python3
"""
AutoRepo demo - Python (~50 lines)
"""
from typing import List, Dict

def fib(n: int) -> List[int]:
    a, b = 0, 1
    out = []
    for _ in range(n):
        out.append(a)
        a, b = b, a + b
    return out

def stats(arr: List[int]) -> Dict[str, float]:
    total = sum(arr)
    length = len(arr)
    avg = total / length if length else 0
    maximum = max(arr) if arr else 0
    return {"len": length, "sum": total, "avg": avg, "max": maximum}

def is_prime(n: int) -> bool:
    if n < 2: return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

if __name__ == "__main__":
    seq = fib(30)
    s = stats(seq)
    primes = [x for x in seq if is_prime(x)]
    print("Python stats:", s)
    print("Primes:", primes)
    print("Demo complete.")
