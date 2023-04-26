// Chương trình đếm số cặp số không trùng nhau trong dãy B:
function countPairs(B, n) {
  let count = 0;
  let pairs = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (B[i] !== B[j]) {
        count++;
        pairs.push([B[i], B[j]]);
      }
    }
  }
  console.log("Danh sách các cặp số là:");
  for (let i = 0; i < pairs.length; i++) {
    console.log(pairs[i][0] + "&" + pairs[i][1]);
  }
  return count;
}

// ví dụ
let B = [1, 2, 3];
let n = B.length;
console.log("Kết quả là:", countPairs(B,n), "cặp số");