const getLargest = (a,b,c) => {
  if (a && b && c) {
    return Math.max(a, b, c);
  } else {
    throw " Error: bad input";
  }
};

const getSmallest = (a, b, c) => {
    if (a && b && c) {
        return Math.min(a, b, c);
      } else {
        throw "Error: bad input";
      }
};
module.exports = { getLargest, getSmallest };
