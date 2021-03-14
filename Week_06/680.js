function isPali(str, l, r) { // 判断str是否回文
  while (l < r) {            
    if (str[l] != str[r]) {  // 指向的字符不一样，不是回文串
      return false;
    }
    l++;                     // 指针相互逼近
    r--;
  }
  return true;               // 始终没有不一样，返回true
}

var validPalindrome = function (str) {
  let l = 0, r = str.length - 1; // 头尾指针
  while (l < r) { 
    if (str[l] != str[r]) {      // 指向的字符不一样，还不能死刑 
      return isPali(str, l + 1, r) || isPali(str, l, r - 1); //转为判断删掉一个字符后，是否回文
    }
    l++;
    r--;
  }
  return true;
};
