/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// N叉树层级遍历

/**
 * @param {Node} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//      let result =[];
//     if (root == null) return result;
   
//     let queue=[];
//     queue.push(root);
//     while(queue.length>0){
//         let current=[];
//         let size = queue.length;
//         for(let i=0;i<size;i++){
//             //取出先放进去的 就是 左边的
//             let node =queue.shift();
//             //添加
//             current.push(node.val);
//             //把子叶子放入进去压栈
//             node.children.map(item=>{
//                 queue.push(item)
//             })
//         }
//         result.push(current);
//     }
//     return result
// };

var levelOrder = function(root) {
  let result =[];
  if (root != null){
   genderOrder(root,result,0)
   return result
  }
 return result
}
let genderOrder=(root,result,level)=>{
 if(result.length<=level){
     result.push([])
 }
 result[level].push(root.val)
 for (let i=0;i<root.children.length;i++){
     genderOrder(root.children[i],result,level+1)
 } 
}