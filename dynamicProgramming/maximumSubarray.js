// "Maximum Subarray Sum" or "Largest Sum Contiguous Subarray" is one of the challenging as well as simply solved by DP.
// Example:
// Given an array as an input: [3, -4, 5, -2, -1, 3, 2, -7, 6] 
// The MSS Output: [5, -2, -1, 3, 2]

// ** Divide and conquer **
const maxCrossSubarray = (q, low, mid, high) => {
  const n = q.length - 1
  let leftSum = -Number.MAX_VALUE
  let rightSum = -Number.MAX_VALUE
  let sum = 0,
    start = mid,
    end = mid
  for (let i = mid; i >= 0; i--) {
    sum = sum + q[i]
    if (sum > leftSum) {
      leftSum = sum
      start = i
    }
  }
  sum = 0
  for (let i = mid + 1; i < n; i++) {
    sum = sum + q[i]
    if (sum > rightSum) {
      rightSum = sum
      end = i
    }
  }
  return [leftSum + rightSum, start, end]
}

// ** Dynamic Programming **
const mss = q => {
  const n = q.length
  const s = []
  let max = 0, index, start, end
  for (let i = 0; i < n; i++) {
    if (s[i - 1] && s[i - 1] + q[i] > q[i]) {
      s[i] = s[i - 1] + q[i]
    } else {
      index = i
      s[i] = q[i]
    }
    if (s[i] > max) {
      max = s[i]
      start = index
      end = i + 1
    }
  }
  return q.slice(start, end)
}
