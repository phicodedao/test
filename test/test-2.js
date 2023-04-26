
// chương trình tìm số thứ N trong dãy Fibonacci.

// Cách 1
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

// Cách 2
function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  } else {
    let a = 0,
      b = 1,
      c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

console.log(fibonacciRecursive(5));
console.log(fibonacciIterative(8));

// Kết thúc bài 2