function threeSum(nums: number[]): number[][] {
    let ans:number[][] = [];
    const len:number = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let left:number = i+1;
        let right:number = len-1;
        while(left < right){
            const sum:number = nums[i] + nums[left] + nums[right];
            if(sum == 0){
                ans.push([nums[i],nums[left],nums[right]]);
                while (left<right && nums[left] == nums[left+1]) left++; // 去重
                while (left<right && nums[right] == nums[right-1]) right--; // 去重
                left++;
                right--;
            }
            else if (sum < 0) left++;
            else if (sum > 0) right--;
        }
    }        
    return ans;
};