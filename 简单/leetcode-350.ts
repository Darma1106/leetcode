function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []
  nums1.forEach((num1) => {
    const targetIndex = nums2.findIndex((num2) => {
      return num2 == num1
    })
    if (targetIndex !== -1) {
      res.push(nums2[targetIndex])
      nums2.splice(targetIndex, 1)
    }
  })

  return res
}

console.log(intersect([4, 9, 5, 0, 9], [9, 4, 9, 8, 4]))
