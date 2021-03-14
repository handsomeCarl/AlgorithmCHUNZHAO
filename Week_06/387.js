var firstUniqChar = function(s) {
  const position = new Map();
  const q = [];
  const n = s.length;
  for (let [i, ch] of Array.from(s).entries()) {
      if (!position.has(ch)) {
          position.set(ch, i);
          q.push([s[i], i]);
      } else {
          position.set(ch, -1);
          while (q.length && position.get(q[0][0]) === -1) {
              q.shift();
          }
      }
  }
  return q.length ? q[0][1] : -1;
};
