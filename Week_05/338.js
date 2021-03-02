var countBits = function(num) {
  const bits = new Array(num + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= num; i++) {
      if ((i & (i - 1)) == 0) {
          highBit = i;
      }
      bits[i] = bits[i - highBit] + 1;
  }
  return bits;
};
