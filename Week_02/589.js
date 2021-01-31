/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// N叉树的前序遍历
/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) {
//     // let result=[];
//     // postOrder(root,result);
//     // return result
// };
// let postOrder=(root,result)=>{
//     if(!root){
//         return null
//     }
    //    加入跟  然后 遍历子节点 
//     result.push(root.val);
//     for(let i=0;i<root.children.length;i++){
//         postOrder(root.children[i],result)
//     }
   
// }
// var preorder = function(root) {
//     let result=[];
//     let stack=[];
//     if(!root){
//         return []
//     }
//     //打入占中，
//     stack.push(root)
//     while(stack.length>0){
//         //出战遍历，然后打入
//         let  top = stack.pop();
//         result.push(top.val)
//         if (top.children) {
//             top.children.reverse().forEach(node => stack.push(node))
//         }
//     }
//     return result
// };

// var preorder = function(root) {
//     let result=[];
  
//     genderOrder(root,result);
//     return result;
  
// };

// let genderOrder=(root,result)=>{
//     if(!root){
//         return null
//    }
//   result.push(root.val);
//     for(let i=0;i<root.children.length;i++){
//         genderOrder(root.children[i],result)
//     }
// }

var preorder = function(root) {
  let result=[];
  let stack=[];
   if(!root){
      return []
  }
   stack.push(root)
  while(stack.length>0){
      let top=stack.pop();
      result.push(top.val);
      top.children.reverse().forEach(node=>stack.push(node))
  }
  return result
};