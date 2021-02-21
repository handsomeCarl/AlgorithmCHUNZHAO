/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  // 只含数字的非空字符串 可以被切分为多少个子串 & 子项不小于0不大于26
     // 当前项目最大解码方法 = 上一项数字（0-9） 或 上上项数字(10 - 26) - 分治 
     if (s[0] === '0') return 0
     const len = s.length
     const dp = [1, 1, ...new Array(len - 1).fill(0)]
     for (let i = 2; i <= len; i++) {
         let lastOneDig = s.slice(i - 1, i),
             lastTwoDig = s.slice(i - 2, i)
         if (lastOneDig > 0 && lastOneDig < 10) dp[i] += dp[i - 1]
         if (lastTwoDig > 9 && lastTwoDig < 27) dp[i] += dp[i - 2]
     }
     return dp[len]
 };