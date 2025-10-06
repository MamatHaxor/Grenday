using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static List<long> Fib(int n) {
        long a = 0, b = 1;
        var outList = new List<long>();
        for (int i = 0; i < n; i++) {
            outList.Add(a);
            long tmp = a + b;
            a = b; b = tmp;
        }
        return outList;
    }

    static void Main() {
        var seq = Fib(25);
        long sum = seq.Sum();
        Console.WriteLine($"C# seq len={seq.Count}, sum={sum}, max={seq.Max()}");
        for (int i = 0; i < Math.Min(10, seq.Count); i++) {
            Console.WriteLine($"{i:00}: {seq[i]}");
        }
        Console.WriteLine("Hello, NaldyXploit!");
    }
}
