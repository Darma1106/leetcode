function specialNumber(phoneNumber: string): boolean {
  return isIdentical(phoneNumber) || isIncreasing(phoneNumber)
}

function isIdentical(phoneNumber: string): boolean {
  let left = 0,
    right = 0,
    len = 0
  while (left <= right && right < phoneNumber.length) {
    if (phoneNumber[right] == phoneNumber[left]) {
      right++
      len++
    } else {
      left = right
      len = 0
    }
    if (len == 3) {
      return true
    }
  }
  return false
}

function isIncreasing(phoneNumber: string): boolean {
  let len = 1
  for (let right = 1; right < phoneNumber.length; right++) {
    if (Number(phoneNumber[right]) == Number(phoneNumber[right - 1]) + 1) {
      len++
    } else {
      len = 1
    }
    if (len == 4) {
      return true
    }
  }
  return false
}
