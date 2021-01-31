/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// N叉树的后序遍历
/**
 * @param {Node} root
 * @return {number[]}
 */
// var postorder = function(root) {
//     ;
//    if(!root){
//      return []
//    }
//    let result=[]
//    let stack=[];
//    stack.push(root);
//    while(stack.length){
//        let top=stack.pop();
//        result.push(top.val)
//        top.children.forEach(node=>stack.push(node));
      
//    } 
//    return result.reverse();
// };

// 递归调用
// var postorder = function(root) {
    

//    let result=[]
//    generOrder(root,result);
//    return result;
// };
// var generOrder=(root,result)=>{
//     if(!root){
//      return []
//     }
   
//     for(let i=0;i<root.children.length;i++){
//         generOrder(root.children[i],result)
//     }
//     result.push(root.val)
    
// }

//栈方法，将树节点押入占中
var postorder = function(root) {
  let result=[];
  let stack=[];
  stack.push(root)
  while(stack.length>0){
      if(!root){
          return [];
      }
      let top=stack.pop();
      
      top.children.forEach(node=>stack.push(node))
      result.push(top.val)
  }
  return result.reverse()
}

