/**
 Do not return anything, modify nums1 in-place instead.
 */


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let index = 0; index < n; index++) {
        nums1[m+index] = nums2[index];
    }
    nums1.sort((a,b)=>a-b);
};