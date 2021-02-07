/**
 * @param {number[]} nums
 * @return {number[][]}
 */


const subsets = (nums) => {
  // 1. 设置结果集
  const result = [[]];
  // 2. 数组排序
//   nums.sort((a, b) => a - b);
  // 3. 递归
  const recursion = (index, path) => {
    // 3.1 设置终止条件
    if (path.length === nums.length) {
      return;
    }
    // 3.2 遍历数组
    for (let i = index; i < nums.length; i++) {
      // 3.2.1 添加内容
      path.push(nums[i]);
      // 3.2.2 添加结果集
      result.push(path.concat());
      // 3.2.3 进一步递归
      recursion(i + 1, path);
      // 3.2.4 回溯，还原之前状态，以备下一次使用
      path.pop();
    }
  };
  recursion(0, []);
  // 4. 返回结果
  return result;
};
