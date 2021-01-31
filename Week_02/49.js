/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let i = 0, j = 0, k = 0, min, a = [];
  a[0] = 1;
  while(--n) {
      min = Math.min(a[i] * 2, a[j] * 3, a[k] * 5);
      if (min === a[i] * 2) i++;
      if (min === a[j] * 3) j++;
      if (min === a[k] * 5) k++;
      a.push(min);
  }
  return a.pop();
};