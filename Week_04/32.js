/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // 状态：以当前字符结尾的字符串，最长的有效括号长度是多大
 const dp = Array(s.length).fill(0);

 for (let i = 1; i < s.length; i++) {
     // 有效括号只能是以 ')' 结尾的
     // 所以，以 '(' 结尾的字符串，最长有效括号长度就是 0，不用管
     if (s[i] === ')') {
         // 遇到 ')' 时，往左边去找跟它匹配的 '('，如果存在，那么有效长度在 dp[i - 1] 基础上加 2

         // dp[i - 1] 是以 s[i - 1] 结尾的字符串的最长有效括号长度，设它为 k，
         // 也就是 [i - k, i - 1] 这段是有效括号字符串，
         // 如果这段字符串前面的那个字符 s[i - k - 1] 是 '(' 的话，那么有效长度加 2
         if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
             dp[i] = dp[i - 1] + 2;

             // 如果匹配到的 '(' 前面还有有效长度的话，也加上
             if (i - dp[i - 1] - 2 > 0) {
                 dp[i] += dp[i - dp[i - 1] - 2];
             }
         }
     }
 }
 return Math.max(...dp, 0);
};