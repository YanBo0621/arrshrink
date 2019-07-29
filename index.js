module.exports = function arrshrink(arr, depth) {
  depth = typeof depth == "number" ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(arr)) {
      return arr.map(function(i) {
        return i;
      });
    }
    return arr;
  }

  return _arrshrink(arr, 1);

  function _arrshrink(arr, d) {
    return arr.reduce(function(acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_arrshrink(item, d + 1));
      } else {
        return acc.concat(item);
      }
    }, []);
  }
};
