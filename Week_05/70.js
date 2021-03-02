/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // let cache={}
  // let res =0
  // if(n<=1){
  //     return 1
  // }
  // if(cache[n]){
  //   return cache[n]
  // }
  //  res =  climbStairs(n-1)+climbStairs(n-2)
  //  cache[n]=res
  // return res

  let p = 0, q = 0, r = 1;
      for (let i = 1; i <= n; ++i) {
          // r 是最后的结果， p q 相当于n-1 n-2 相加就是最后的结果 
          p = q; 
          q = r; 
          r = p + q;
      }
      return r;
};