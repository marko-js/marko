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
      // Applying an operator can throw -- mixing a BigInt with a number does.
      // That means "not a constant", not a compiler crash.
      try {
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
      } catch {
        return;
      }
    }
    case "UnaryExpression": {
      const arg = computeNode(node.argument);
      if (!arg) return;
      try {
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
      } catch {
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
            if (prop.computed && key === "__proto__") {
              // Only the literal `__proto__:` sets the prototype; computed, it
              // is an ordinary own property, and assigning would set it too.
              Object.defineProperty(value, key, {
                value: propValue.value,
                writable: true,
                enumerable: true,
                configurable: true,
              });
            } else {
              value[key] = propValue.value;
            }
            break;
          }
          case "SpreadElement": {
            const arg = computeNode(prop.argument);
            if (!arg) return;
            Object.assign(value, arg.value);
            break;
          }
          // A method or accessor has no value to fold, so the object is not
          // constant -- dropping the member would understate it.
          default:
            return;
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
