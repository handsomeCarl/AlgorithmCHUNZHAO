// var reverseStr = function(s, k) {
//   let n = 0, result = '';
//      for (let i = 0; i < s.length; i+=k) {
//          // 从那开始切割 ，切割的个数 k，每个k都会切割处理
//          let t= s.slice(i, i+k);
         
//          n++;
//          console.log(n,n%2,i)
//          //n一共会处理几次字符串  每次加完k前  当奇数的时候处理反转
//          if (n%2 === 1) {
//              t = t.split('').reverse().join('');
//              console.log(t)
//          }
         
//          result = result + t;
//      }
//      return result;
// } 


var reverseStr = function(s, k) {
    let temp="";
    let result="";
    let douleK=2*k;
    for (let index = 0; index < s.length; index++) {
      const element = s[index];
      let tem= index%douleK;
      if(tem==k){
        result+=temp
      }
      if(tem<k){
        temp=result+element
      }else{
        temp=element+result
        
      }

    }
    return result+temp
} 

reverseStr("abcdefg",2);