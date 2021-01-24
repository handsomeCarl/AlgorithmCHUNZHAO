/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {

//     // nums.splice 删除 k个元素 在 -(k %= nums.length) 这个位置 返回新的就是需要反转的
//     //然后添加到0起誓位置
//     //-(k %= nums.length) = k=（k%nums.length） 取余数 没整除 就是k 整出就是后边的 负数就是从后往前来。

//     nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k))

// };

let rotate = function(nums, k) {
  k %= nums.length;
  reverse(nums,0,nums.length-1)
  reverse(nums,0,k-1)
  reverse(nums,k,nums.length-1)
};


let reverse =(nums,start,end)=>{
  while(start<end){
      let temp=nums[start]
      nums[start++]=nums[end]
      nums[end--]=temp
  }
}