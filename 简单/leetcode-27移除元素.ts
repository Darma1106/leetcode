function removeElement(nums: number[], val: number): number {
    let ansLen:number = 0;
    nums.forEach((Element)=>{
        if(Element != val){
            nums[ansLen] = Element;
            ansLen++;
        }
})
    return ansLen;
};