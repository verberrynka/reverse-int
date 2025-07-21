module.exports = function reverse(n) {
  const numStr = String(Math.abs(n));

  const reverseNumArr = numStr.split('').reverse();

  const reverseNum = Number(reverseNumArr.join(''));

  return reverseNum;
};
