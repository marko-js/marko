export function classValue(value: unknown) {
  return toDelimitedString(value, " ", stringifyClassObject);
}

function stringifyClassObject(name: string, value: unknown) {
  return value ? name : "";
}

export function styleValue(value: unknown) {
  return toDelimitedString(value, ";", stringifyStyleObject);
}

const NON_DIMENSIONAL = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function stringifyStyleObject(name: string, value: unknown) {
  return value || value === 0
    ? `${name}:${typeof value === "number" && value && !NON_DIMENSIONAL.test(name) ? value + "px" : value}`
    : "";
}

function toDelimitedString(
  val: unknown,
  delimiter: string,
  stringify: (n: string, v: unknown) => string | undefined,
) {
  switch (typeof val) {
    case "string":
      return val;
    case "object":
      if (val !== null) {
        let result = "";
        let curDelimiter = "";

        if (Array.isArray(val)) {
          for (const v of val) {
            const part = toDelimitedString(v, delimiter, stringify);
            if (part !== "") {
              result += curDelimiter + part;
              curDelimiter = delimiter;
            }
          }
        } else {
          for (const name in val) {
            const v = (val as Record<string, unknown>)[name];
            const part = stringify(name, v);
            if (part !== "") {
              result += curDelimiter + part;
              curDelimiter = delimiter;
            }
          }
        }

        return result;
      }
  }

  return "";
}

export function isVoid(value: unknown) {
  return value == null || value === false;
}

export function alphaEncode(num: number): string {
  return num < 52
    ? String.fromCharCode(num < 26 ? num + 97 : num + (65 - 26))
    : alphaEncode((num / 52) | 0) + alphaEncode(num % 52);
}
