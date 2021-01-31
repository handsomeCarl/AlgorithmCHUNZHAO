// 二叉树的中序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function(root) {
  let result=[];
  let stack=[];
 
  while(root||stack.length){
      while(root){
          stack.push(root);
          root=root.left;
      }
      root=stack.pop();
      result.push(root.val);
      root=root.right
  }
  return result
}

// let inorderTraversal = function(root) {
//     const res=[];
//     inorder(res,root)
//     return res;
// };

//   const inorder = (res,root)=>{
//         //中止条件
//         if(!root){
//             return;
//         }
//         // 遍历当前节点的左指数
//         inorder(res,root.left);
//         //吧当前节点加入集合中
//         res.push(root.val);
//         // 遍历当前节点的右指数
//         inorder(res,root.right);
//     }
// let inorderTraversal = function(root) {
//     const res=[];
      // 栈存储节点
//     const stk=[];
//     while(root||stk.length){
      //  找当前节点的左子节点，一直找下去，直到为空为止
//         while(root){
//             stk.push(root);
//             root=root.left;
//         }
        //出栈  这个时候root 就是最左子节点
//        root=stk.pop();
       //然后把最左子节点加入到集合中
//        res.push(root.val);
       //最后再访问他的右子节点
//        root=root.right  
//     }
//    return res

// };