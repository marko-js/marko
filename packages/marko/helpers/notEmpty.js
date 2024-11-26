module.exports = function (o) {
  if (o == null) {
    return false;
  } else if (Array.isArray(o)) {
    return !!o.length;
  } else if (o === "") {
    return false;
  }

  return true;
};
