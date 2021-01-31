/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 二叉树的前序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 前序遍历
// const preorderTraversal = (root) => {
//     let result = []
    
//     preOrderNode(result,root)
//     return result
// };

//  const preOrderNode = (result,treeNode) => {
//         if(treeNode) {
//             // 先根节点
//             result.push(treeNode.val)
//             // 然后遍历左子树
//             preOrderNode(result,treeNode.left)
//             // 再遍历右子树
//             preOrderNode(result,treeNode.right)
//         }
//    }

// 前序遍历
// const preorderTraversal = (root) => {
//     if(!root) return [];
//     let result = []
//     let stk=[];
//      while(root||stk.length){
        
//          while(root!==null){
//             result.push(root.val);
//             stk.push(root)
//             root=root.left
//          }
//          root=stk.pop()
//          root=root.right
//      }
//      return result
// };


// const preorderTraversal = (root) => {
//     let stk=[];
//     let result=[];
//     while(root||stk.length){
//         while(root){
//             result.push(root.val)
//             stk.push(root)
//             root=root.left
//         }
//         root=stk.pop()
//         root=root.right
//     }
//     return result;
// }


const preorderTraversal = (root) => {
  let result=[];
  genderOrder(root,result);
  return result
}

let genderOrder=(root,result)=>{
  if(!root){
      return null
  }
  result.push(root.val);
  genderOrder(root.left,result)
  genderOrder(root.right,result)
}