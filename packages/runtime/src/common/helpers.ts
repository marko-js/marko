export function classValue(value: unknown) {
  return toDelimitedString(value, " ", stringifyClassObject);
}

function stringifyClassObject(name: string, value: unknown) {
  if (isVoid(value)) {
    return "";
  }

  return name;
}

export function styleValue(value: unknown) {
  return toDelimitedString(value, ";", stringifyStyleObject);
}

const NON_DIMENSIONAL = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function stringifyStyleObject(name: string, value: unknown) {
  if (isVoid(value)) {
    return "";
  }

  if (typeof value === "number" && value && !NON_DIMENSIONAL.test(name)) {
    ((value as unknown) as string) += "px";
  }

  return `${name}:${value}`;
}

function toDelimitedString(
  val: unknown,
  delimiter: string,
  stringify: (n: string, v: string) => string | undefined
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
            const v = val[name];
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
