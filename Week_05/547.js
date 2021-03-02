/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let length = isConnected.length;
      //表示哪些城市被访问过
      let visited = [];
      let count = 0;//相连的城市数量，也就是省份
      //遍历所有的城市
      for (let i = 0; i < length; i++) {
          //如果当前城市没有被访问过，说明是一个新的省份，count
          //要加1，并且和这个城市相连的都标记为已访问过，也就是
          //同一省份的
          if (!visited[i]) {
              dfs(isConnected, visited, i);
              count++;
          }
      }
      //返回省份的数量
      return count;
};



  const  dfs=( isConnected, visited, i) =>{
      for (let j = 0; j < isConnected.length; j++) {
          if (isConnected[i][j] == 1 && !visited[j]) {
              //如果第i和第j个城市相连，说明他们是同一个省份的，把它标记为已访问过
              visited[j] = true;
              //然后继续查找和第j个城市相连的城市
              dfs(isConnected, visited, j);
          }
      }
  }