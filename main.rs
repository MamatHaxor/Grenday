// AutoRepo demo - Rust (~40 lines)
fn fib(n: usize) -> Vec<u128> {
    let (mut a, mut b) = (0u128, 1u128);
    let mut out = Vec::new();
    for _ in 0..n {
        out.push(a);
        let tmp = a + b;
        a = b; b = tmp;
    }
    out
}

fn main() {
    let seq = fib(20);
    let sum: u128 = seq.iter().sum();
    println!("Rust seq len={}, sum={}", seq.len(), sum);
    for (i, v) in seq.iter().enumerate().take(10) {
        println!("{:02}: {}", i, v);
    }
    println!("Hello, NaldyXploit!");
}
