/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curr = 0; // 当前位置
    let next = 0; // 跳跃后的位置
    let stepNum = 0; // 跳跃次数
    let length = nums.length - 1;
    for (let i = 0; i < length; i++) {
        next = Math.max(next, i + nums[i]);// 跳一次的最远跳跃距离 = 当前位置 + 可跳跃的最大数
        if (curr >= length) break;
        if (curr === i) {
            curr = next;
            stepNum ++;
        }
    }
    return stepNum;

};