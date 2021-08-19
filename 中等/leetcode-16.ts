function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b)
  let flag = 0
  let left = 1
  let right = nums.length - 1
  let newtarget = target - nums[flag]
  let min = nums[0] + nums[1] + nums[2] - target
  let tmpright
  let tmpleft
  let tmpadd
  while (flag != nums.length - 2) {
    tmpright = nums[right]
    tmpleft = nums[left]
    tmpadd = tmpleft + tmpright
    if (tmpadd > newtarget) {
      if (Math.abs(tmpadd - newtarget) < Math.abs(min)) {
        min = Math.abs(tmpadd - newtarget)
      }
      right--
    } else if (nums[left] + nums[right] == newtarget) {
      return target
    } else {
      if (Math.abs(tmpadd - newtarget) < Math.abs(min)) min = -Math.abs(tmpadd - newtarget)
      left++
    }
    if (left == right) {
      flag++
      left = flag + 1
      right = nums.length - 1
      newtarget = target - nums[flag]
    }
  }
  return target + min
}
