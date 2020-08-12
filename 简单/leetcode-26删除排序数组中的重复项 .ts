
function removeDuplicates(nums: number[]): number {
    if(nums.length<2){return nums.length;}
    let j:number = 0;
    for(let i = 1;i<=nums.length;i++){
        if(nums[i-1] != nums[i]){
            nums[j] = nums[i-1];
            j++;
        }
    }
    return j;
};