# AutoRepo demo - Ruby (~40 lines)
def fib(n)
  a, b = 0, 1
  out = []
  n.times do
    out << a
    a, b = b, a + b
  end
  out
end

def stats(arr)
  sum = arr.sum
  { len: arr.length, sum: sum, avg: sum.to_f / arr.length }
end

seq = fib(25)
puts "Ruby stats: #{stats(seq)}"
puts "Primes in seq:"
seq.each { |v| puts v if v < 100 && v.prime? rescue false }
puts "Done."
