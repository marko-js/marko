module.exports = function(o) {
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    require("complain")("notEmpty is deprecated.");
  }

  if (o == null) {
    return false;
  } else if (Array.isArray(o)) {
    return !!o.length;
  } else if (o === "") {
    return false;
  }

  return true;
};
