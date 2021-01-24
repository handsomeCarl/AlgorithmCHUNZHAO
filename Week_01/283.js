/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * loop 记录0 的次数
 * 开辟一个新的数组  
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

 */
let moveZeroes = function(nums) {
    if(nums.length<0){
        return;
    }
    // let j =0;  
    // for(let i = 0;i<nums.length;++i){
    //     if(nums[i]!==0){
    //         nums[j++]=nums[i]
    //     }
        
    // }
    // // 从j开始到nums结束 都是0
    //  for(let i= j;i<nums.length;++i){
    //     nums[i]=0
    // }

    let j =0;  
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!=0){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j++]=temp;
        }
    }
};