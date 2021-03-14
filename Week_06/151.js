var reverseWords = function(s) {
  let left = 0
  let right = s.length - 1
  
  // 1. 找到不是空格的起始位置和终点位置
  while (s.charAt(left) === ' ') left++
  while(s.charAt(right) === ' ') right--
  let word = ''
  let deque = []
  // 2. 依次找到单词
  while(left <= right) {
  let char = s.charAt(left)
  // 3. 如果该位置是空格并且word不为空字符，说明前面的是一个单词，就将word放入队列头部
  if (char === ' ' && word) {
      //放入头部
      deque.unshift(word)
      // 将word置空
      word = ''
      // 否则累加word
    } else if (char !== ' '){
      word+= char
    }
    left++
  }
    // 最后一个单词不能再拆分了
    deque.unshift(word)

  return deque.join(' ')
}

// var reverseWords = function(s) {
//   let arr = s.trim().split(/\s+/)
//   if(arr.length<1){
//       return
//   }
//   let result = arr.reverse().join(" ")
//   return result;
// };