module.exports = function (fn, count) {
  return function () {
    var all = Array.prototype.slice.call(arguments);
    return fn.apply(this, all.slice(0, count || 1));
  };
};
