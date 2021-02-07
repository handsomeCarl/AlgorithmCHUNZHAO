/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let result = []
     function rec (row = 0, stringTemp=[],temp=[]){
         // row表示当前棋子放第几行
         // stringTemp用于记录轨迹
         // temp用于记录点的坐标        
         if(row===n){
             result.push([...stringTemp])
             return result
         }
 
         for(let i=0;i<n;i++){
             // 检测当前格子能否放置 是否与前几行冲突？
             let errTemp = false
             // 默认是没有放棋子的，不存在冲突 默认值为false
             for(let j = 0;j<temp.length;j++){
                 let tempRow = temp[j].row
                 let tempColumn = temp[j].column
                 let currentRow = row
                 let currentColumn = i
                 if(tempColumn===currentColumn||Math.pow(tempRow-currentRow,2)===Math.pow(tempColumn-currentColumn,2)){
                     errTemp = true
                     break;
                 }
             }
             // 冲突则跳过
             if(errTemp){
                 continue
             }
             let sTemp = '.'.repeat(n)
             // 不冲突
             stringTemp.push(sTemp.slice(0,i)+'Q'+sTemp.slice(i+1))
             temp.push({row:row,column:i})        
             rec(row+1,stringTemp,temp)
             stringTemp.pop()
             temp.pop()
         }
     }
     rec()
     return result
 
 };