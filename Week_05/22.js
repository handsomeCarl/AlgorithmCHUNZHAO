/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result=[];
  dfs(result,n,n,"")
  return result
};

let dfs=(res,left,right,path)=>{
  if(left==0&&right==0){
      res.push(path)
      return
  }
  if (left > 0){
     dfs(res, left - 1, right, path + '(')
  }
  if (left < right){
     dfs(res, left, right - 1, path + ')')
  }  
  
          
}