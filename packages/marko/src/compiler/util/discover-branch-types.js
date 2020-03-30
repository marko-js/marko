module.exports = function discoverBranchTypes(node, result) {
  result = result || {};
  if (node.type === "ConditionalExpression") {
    discoverBranchTypes(node.consequent, result);
    discoverBranchTypes(node.alternate, result);
  } else if (node.type === "LogicalExpression") {
    if (node.operator === "&&") {
      if (node.left.type !== "Literal" || !node.left.value) {
        result.empty = true;
      }
      discoverBranchTypes(node.right, result);
    } else {
      discoverBranchTypes(node.left, result);
      discoverBranchTypes(node.right, result);
    }
  } else if (node.type === "Literal") {
    if (!node.value) {
      result.empty = true;
    }
  } else {
    result.expression = true;
  }
  return result;
};
