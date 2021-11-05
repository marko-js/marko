/* eslint "@typescript-eslint/ban-types": ["error", { "types": { "object": false }, "extendDefaults": true }] */

const { hasOwnProperty } = Object.prototype;
const PARAM_BIND = "b";
const PARAM_SCOPE = "s";
const REF_START_CHARS = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_"; // Avoids chars that could evaluate to a reserved word.
const REF_START_CHARS_LEN = REF_START_CHARS.length;
const REF_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
const REF_CHARS_LEN = REF_CHARS.length;
const SYMBOL_FN_ID = Symbol("FN_ID");
const SYMBOL_SCOPE_ID = Symbol("SCOPE_ID");
const SYMBOL_OFFSET = Symbol("OFFSET");

type SerializableFn = ((...args: unknown[]) => unknown) & {
  [SYMBOL_FN_ID]: string;
  [SYMBOL_SCOPE_ID]: string;
  [SYMBOL_OFFSET]: number;
};

export function register(
  fn: (...args: unknown[]) => unknown,
  fnId: string,
  scopeId: string,
  offset: number
): SerializableFn {
  (fn as SerializableFn)[SYMBOL_FN_ID] = fnId;
  (fn as SerializableFn)[SYMBOL_SCOPE_ID] = scopeId;
  (fn as SerializableFn)[SYMBOL_OFFSET] = offset;
  return fn as SerializableFn;
}

export function stringify(root: unknown) {
  return new Serializer().stringify(root);
}
export class Serializer {
  // TODO: hoist these back out?
  STACK: object[] = [];
  BUFFER: string[] = [""];
  ASSIGNMENTS: Map<string, string> = new Map();
  INDEX_OR_REF: WeakMap<object, number | string> = new WeakMap();
  REF_COUNT = 0;
  // These stay
  PARENTS: WeakMap<object, object> = new WeakMap();
  KEYS: WeakMap<object, number | string> = new WeakMap();

  constructor() {
    this.BUFFER.pop();
  }

  stringify(root: unknown) {
    if (this.writeProp(root, "", undefined)) {
      const { BUFFER, REF_COUNT, ASSIGNMENTS, INDEX_OR_REF } = this;

      let result = BUFFER[0];

      for (let i = 1, len = BUFFER.length; i < len; i++) {
        result += BUFFER[i];
      }

      if (REF_COUNT) {
        if (ASSIGNMENTS.size) {
          let ref = INDEX_OR_REF.get(root as object);

          if (typeof ref === "number") {
            ref = toRefParam(this.REF_COUNT++);
            result = ref + "=" + result;
          }

          for (const [assignmentRef, assignments] of ASSIGNMENTS) {
            result += "," + assignments + assignmentRef;
          }

          result += "," + ref;
          this.ASSIGNMENTS = new Map();
        }

        result =
          "(" +
          PARAM_BIND +
          "," +
          PARAM_SCOPE +
          "," +
          this.refParamsString() +
          ")=>(" +
          result +
          ")";
      } else if (root && (root as object).constructor === Object) {
        result = "(" + PARAM_BIND + "," + PARAM_SCOPE + ")=>(" + result + ")";
      }

      BUFFER.length = 0;
      this.INDEX_OR_REF = new WeakMap();

      return result;
    }

    return "void 0";
  }

  writeProp(
    cur: unknown,
    accessor: string | number,
    parent: object | undefined
  ): boolean {
    const { BUFFER } = this;
    switch (typeof cur) {
      case "string":
        BUFFER.push(quote(cur, 0));
        break;

      case "number":
        BUFFER.push(cur + "");
        break;

      case "boolean":
        BUFFER.push(cur ? "!0" : "!1");
        break;

      case "object":
        if (cur === null) {
          BUFFER.push("null");
        } else {
          const ref = this.getRef(cur, accessor, parent);

          switch (ref) {
            case true:
              return false;
            case false:
              switch (cur.constructor) {
                case Object:
                  this.writeObject(cur as Record<string, unknown>);
                  break;

                case Array:
                  this.writeArray(cur as unknown[]);
                  break;

                case Date:
                  BUFFER.push(
                    'new Date("' + (cur as Date).toISOString() + '")'
                  );
                  break;

                case RegExp:
                  BUFFER.push(cur + "");
                  break;

                case Map:
                  BUFFER.push("new Map(");
                  this.writeArray(
                    Array.from(cur as Map<unknown, unknown> | Set<unknown>)
                  );
                  BUFFER.push(")");
                  break;

                case Set:
                  BUFFER.push("new Set(");
                  this.writeArray(
                    Array.from(cur as Map<unknown, unknown> | Set<unknown>)
                  );
                  BUFFER.push(")");
                  break;

                case undefined:
                  BUFFER.push("Object.assign(Object.create(null),");
                  this.writeObject(cur as Record<string, unknown>);
                  BUFFER.push("))");
                  break;

                default:
                  return false;
              }
              break;

            default:
              BUFFER.push(ref);
              break;
          }
        }
        break;
      case "function": {
        return this.writeFunction(cur as SerializableFn);
      }

      default:
        return false;
    }

    return true;
  }

  writeFunction(fn: SerializableFn) {
    const {
      [SYMBOL_FN_ID]: fnId,
      [SYMBOL_SCOPE_ID]: scopeId,
      [SYMBOL_OFFSET]: offset,
    } = fn;
    if (fnId && scopeId && offset != null) {
      // ASSERT: fnId and scopeId don't need `quote` escaping
      this.BUFFER.push(`${PARAM_BIND}("${fnId}",${offset},"${scopeId}")`);
      return true;
    }
    return false;
  }

  writeObject(obj: Record<string, unknown>) {
    const { STACK, BUFFER } = this;

    let sep = "{";
    STACK.push(obj);

    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        const val = obj[key];
        const escapedKey = toObjectKey(key);
        BUFFER.push(sep + escapedKey + ":");
        if (this.writeProp(val, escapedKey, obj)) {
          sep = ",";
        } else {
          BUFFER.pop();
        }
      }
    }

    if (sep === "{") {
      BUFFER.push("{}");
    } else {
      BUFFER.push("}");
    }

    STACK.pop();
  }

  writeArray(arr: unknown[]) {
    const { STACK, BUFFER } = this;

    BUFFER.push("[");
    STACK.push(arr);

    this.writeProp(arr[0], 0, arr);

    for (let i = 1, len = arr.length; i < len; i++) {
      BUFFER.push(",");
      this.writeProp(arr[i], i, arr);
    }

    STACK.pop();
    BUFFER.push("]");
  }

  getRef(cur: object, accessor: string | number, parent: object | undefined) {
    const { STACK, BUFFER, INDEX_OR_REF, ASSIGNMENTS, PARENTS, KEYS } = this;

    let ref = INDEX_OR_REF.get(cur);

    if (ref === undefined) {
      INDEX_OR_REF.set(cur, BUFFER.length);

      let knownParent = PARENTS.get(cur);

      if (knownParent === undefined) {
        PARENTS.set(cur, parent!);
        KEYS.set(cur, accessor);
        return false;
      } else {
        let ref = "";
        while (knownParent) {
          ref = toPropertyAccess(KEYS.get(cur)!) + ref;
          knownParent = PARENTS.get((cur = knownParent));
        }
        return PARAM_SCOPE + ref;
      }
    }

    if (typeof ref === "number") {
      ref = this.insertAndGetRef(cur, ref);
    }

    if (STACK.includes(cur)) {
      const parent = STACK[STACK.length - 1];
      let parentRef = INDEX_OR_REF.get(parent) as string | number;

      if (typeof parentRef === "number") {
        parentRef = this.insertAndGetRef(parent, parentRef);
      }

      ASSIGNMENTS.set(
        ref,
        (ASSIGNMENTS.get(ref) || "") + toAssignment(parentRef, accessor) + "="
      );
      return true;
    }

    return ref;
  }

  insertAndGetRef(obj: object, pos: number) {
    const ref = toRefParam(this.REF_COUNT++);
    this.INDEX_OR_REF.set(obj, ref);
    if (pos) {
      this.BUFFER[pos - 1] += ref + "=";
    } else {
      this.BUFFER[pos] = ref + "=" + this.BUFFER[pos];
    }

    return ref;
  }

  refParamsString() {
    let result = REF_START_CHARS[0];

    for (let i = 1; i < this.REF_COUNT; i++) {
      result += "," + toRefParam(i);
    }

    this.REF_COUNT = 0;
    return result;
  }
}

function toObjectKey(name: string) {
  const invalidIdentifierPos = getInvalidIdentifierPos(name);
  return invalidIdentifierPos === -1 ? name : quote(name, invalidIdentifierPos);
}

function toAssignment(parent: string, key: string | number) {
  return parent + toPropertyAccess(key);
}

function toPropertyAccess(key: string | number) {
  return typeof key === "number" || key[0] === '"'
    ? "[" + key + "]"
    : "." + key;
}

function getInvalidIdentifierPos(name: string) {
  let char = name[0];
  if (
    !(
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      char === "$" ||
      char === "_"
    )
  ) {
    return 0;
  }

  for (let i = 1, len = name.length; i < len; i++) {
    char = name[i];
    if (
      !(
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9") ||
        char === "$" ||
        char === "_"
      )
    ) {
      return i;
    }
  }

  return -1;
}

// Creates a JavaScript double quoted string and escapes all characters not listed as DoubleStringCharacters on
// Also includes "<" to escape "</script>" and "\" to avoid invalid escapes in the output.
// http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
function quote(str: string, startPos: number): string {
  let result = "";
  let lastPos = 0;

  for (let i = startPos, len = str.length; i < len; i++) {
    let replacement: string;
    switch (str[i]) {
      case '"':
        replacement = '\\"';
        break;
      case "\\":
        replacement = "\\\\";
        break;
      case "<":
        replacement = "\\x3C";
        break;
      case "\n":
        replacement = "\\n";
        break;
      case "\r":
        replacement = "\\r";
        break;
      case "\u2028":
        replacement = "\\u2028";
        break;
      case "\u2029":
        replacement = "\\u2029";
        break;
      default:
        continue;
    }

    result += str.slice(lastPos, i) + replacement;
    lastPos = i + 1;
  }

  if (lastPos === startPos) {
    result = str;
  } else {
    result += str.slice(lastPos);
  }

  return '"' + result + '"';
}

function toRefParam(index: number) {
  let mod = index % REF_START_CHARS_LEN;
  let ref = REF_START_CHARS[mod];
  index = (index - mod) / REF_START_CHARS_LEN;

  while (index > 0) {
    mod = index % REF_CHARS_LEN;
    ref += REF_CHARS[mod];
    index = (index - mod) / REF_CHARS_LEN;
  }

  return ref;
}
