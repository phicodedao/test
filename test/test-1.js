//  chương trình sắp xếp dãy số A từ nhỏ đến lớn và loại bỏ số không phải là số nguyên tố.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sortAndRemoveNonPrimes(A) {
  let n = A.length;
  // sắp xếp dãy A từ nhỏ đến lớn
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (A[i] > A[j]) {
        [A[i], A[j]] = [A[j], A[i]];
      }
    }
  }
  // loại bỏ các số không phải số nguyên tố
  let i = 0;
  while (i < n) {
    if (isPrime(A[i])) {
      i++;
    } else {
      A.splice(i, 1);
      n--;
    }
  }
  return A;
}
let A = [1,5,3,23,55,1,23,51];
console.log(sortAndRemoveNonPrimes(A));

//  Kết thúc chương trình 1


