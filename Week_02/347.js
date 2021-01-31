// 前 K 个高频元素
var topKFrequent = function(nums, k) {
  let res=[];
  let newMap=new Map()
  nums.map(item=>{
      if(newMap.get(item)){
          newMap.set(item,newMap.get(item)+1);
      }else{
          newMap.set(item,1)
      }

      let list=[];
      newMap.forEach((value,key)=>{
          let i =newMap.get(key)
          if(list[i]==null){
              list[i]=[]
          }
          list[i].push(key)
      })
      
      for(let j=list.length-1;j>=0&&res.length<k;j--){
         if(list[j] == null) continue;
         list[j].map(item=>{
            res.push(item);
         })
      }
      return res;
  })
}