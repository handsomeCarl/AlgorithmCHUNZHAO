var reverseOnlyLetters = function(S) {
  let i = 0,j = S.length-1,str1='',str2='';
  while(i<=j){
      if((S[i]<'a'||S[i]>'z')&&(S[i]<'A'||S[i]>'Z')){
          str1+=S[i]
          i++;
          continue;
      }
       if((S[j]<'a'||S[j]>'z')&&(S[j]<'A'||S[j]>'Z')){
          str2=S[j]+str2
          j--;
          continue;
      }
      str1 = str1+S[j--];
      if(i<j)  str2 = S[i++]+str2;
    
  }
  return str1+str2
};
