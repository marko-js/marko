/**
 * @param {import("@babel/types").Node} node
 */
export function computeNode(node) {
  switch (node.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return { value: node.value };
    case "RegExpLiteral":
      return { value: new RegExp(node.pattern, node.flags) };
    case "NullLiteral":
      return { value: null };
    case "Identifier":
      switch (node.name) {
        case "undefined":
          return { value: undefined };
        case "NaN":
          return { value: NaN };
        case "Infinity":
          return { value: Infinity };
        default:
          return;
      }
    case "BigIntLiteral":
      return { value: BigInt(node.value) };
    case "ParenthesizedExpression":
      return computeNode(node.expression);
    case "BinaryExpression": {
      const left = computeNode(node.left);
      if (!left) return;
      const right = computeNode(node.right);
      if (!right) return;
      switch (node.operator) {
        case "+":
          return { value: left.value + right.value };
        case "-":
          return { value: left.value - right.value };
        case "*":
          return { value: left.value * right.value };
        case "/":
          return { value: left.value / right.value };
        case "%":
          return { value: left.value % right.value };
        case "**":
          return { value: left.value ** right.value };
        case "|":
          return { value: left.value | right.value };
        case "&":
          return { value: left.value & right.value };
        case "^":
          return { value: left.value ^ right.value };
        case "<<":
          return { value: left.value << right.value };
        case ">>":
          return { value: left.value >> right.value };
        case ">>>":
          return { value: left.value >>> right.value };
        case "==":
          return { value: left.value == right.value };
        case "!=":
          return { value: left.value != right.value };
        case "===":
          return { value: left.value === right.value };
        case "!==":
          return { value: left.value !== right.value };
        case "<":
          return { value: left.value < right.value };
        case "<=":
          return { value: left.value <= right.value };
        case ">":
          return { value: left.value > right.value };
        case ">=":
          return { value: left.value >= right.value };
        default:
          return;
      }
    }
    case "UnaryExpression": {
      const arg = computeNode(node.argument);
      if (!arg) return;
      switch (node.operator) {
        case "+":
          return { value: +arg.value };
        case "-":
          return { value: -arg.value };
        case "~":
          return { value: ~arg.value };
        case "!":
          return { value: !arg.value };
        case "typeof":
          return { value: typeof arg.value };
        case "void":
          return { value: void arg.value };
        default:
          return;
      }
    }
    case "LogicalExpression": {
      const left = computeNode(node.left);
      if (!left) return;
      const right = computeNode(node.right);
      if (!right) return;
      switch (node.operator) {
        case "&&":
          return { value: left.value && right.value };
        case "||":
          return { value: left.value || right.value };
        case "??":
          return { value: left.value ?? right.value };
        default:
          return;
      }
    }
    case "ConditionalExpression": {
      const test = computeNode(node.test);
      if (!test) return;
      const consequent = computeNode(node.consequent);
      if (!consequent) return;
      const alternate = computeNode(node.alternate);
      if (!alternate) return;
      return { value: test.value ? consequent.value : alternate.value };
    }
    case "TemplateLiteral": {
      let value = node.quasis[0].value.cooked;
      for (let i = 0; i < node.expressions.length; i++) {
        const expr = computeNode(node.expressions[i]);
        if (!expr) return;
        value += expr.value + node.quasis[i + 1].value.cooked;
      }
      return { value };
    }
    case "ObjectExpression": {
      const value = {};
      for (const prop of node.properties) {
        if (prop.decorators) return;
        switch (prop.type) {
          case "ObjectProperty": {
            let key;
            if (prop.computed) {
              const keyNode = computeNode(prop.key);
              if (!keyNode) return;
              key = keyNode.value + "";
            } else {
              switch (prop.key.type) {
                case "Identifier":
                  key = prop.key.name;
                  break;
                case "StringLiteral":
                  key = prop.key.value;
                  break;
                default:
                  return;
              }
            }

            const propValue = computeNode(prop.value);
            if (!propValue) return;
            value[key] = propValue.value;
            break;
          }
          case "SpreadElement": {
            const arg = computeNode(prop.argument);
            if (!arg) return;
            Object.assign(value, arg.value);
            break;
          }
        }
      }

      return { value };
    }
    case "ArrayExpression": {
      const value = [];
      for (const elem of node.elements) {
        if (elem) {
          if (elem.type === "SpreadElement") {
            const arg = computeNode(elem.argument);
            if (typeof arg?.value?.[Symbol.iterator] !== "function") return;
            for (const item of arg.value) {
              value.push(item);
            }
          } else {
            const elemValue = computeNode(elem);
            if (!elemValue) return;
            value.push(elemValue.value);
          }
        } else {
          value.length++;
        }
      }

      return { value };
    }
  }
}
