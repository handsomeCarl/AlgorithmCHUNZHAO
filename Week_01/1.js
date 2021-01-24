/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力求解  双层遍历
 * 双指针
 */

// var twoSum = function(nums, target) {
//     let allMap=new Map()
//     for(let i=0;i<nums.length;i++){
//         let otherIndex= allMap.get(target-nums[i]) 
//         if(otherIndex!==undefined){
//             return [otherIndex,i]
//         }
//         allMap.set(nums[i], i);
//     }

// };

// var twoSum = function(nums, target) {
//     let allMap=new Map()
//     for(let i=0;i<nums.length;i++){
//       for(let j =i+1;j<nums.length;j++){
//           if(nums[i]+nums[j]===target){
//               return [i,j]
//           }
//       }
//     }

// };

var twoSum = function(nums, target) {
  let temp=[]
  for(let i=0;i<nums.length;i++){
    
    let dif = target-nums[i];
    if(temp[dif] !=undefined){
        return [temp[dif],i]
    }
    temp[nums[i]]=i
  }

};