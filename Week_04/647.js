/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length;
   let count = 0;
   const dp = new Array(len);
 
   for (let j = 0; j < len; j++) {
     for (let i = 0; i <= j; i++) {
       if (s[i] == s[j] && (j - i <= 1 || dp[i + 1])) {
         dp[i] = true;
         count++;
       } else {
         dp[i] = false;
       }
     }
   }
   return count;
 
 };