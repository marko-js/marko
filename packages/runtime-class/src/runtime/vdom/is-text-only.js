module.exports = function isTextOnly(nodeName) {
  switch (nodeName) {
    case "textarea":
    case "script":
    case "style":
      return true;
  }

  return false;
};
