const NON_DIMENSIONAL = /^(or|li|[az]|--)|n-c|ab|[dl]o|i[mt]|hr|fi|w(e|$)/;

export function classAttr(value: unknown) {
  return toDelimitedString(value, " ", stringifyClassObject);
}

export function styleAttr(value: unknown) {
  return toDelimitedString(value, ";", stringifyStyleObject);
}

function stringifyClassObject(name: string, value: unknown) {
  if (value) {
    return name;
  }
}

function stringifyStyleObject(name: string, value: unknown) {
  if (value != null && value !== false) {
    if (typeof value === "number" && value && !NON_DIMENSIONAL.test(name)) {
      (value as any) += "px";
    }

    return `${name}:${value}`;
  }
}

function toDelimitedString(
  value: unknown,
  delimiter: string,
  stringify: (n: string, v: string) => string | undefined
) {
  if (value) {
    if (typeof value === "string") {
      return value;
    }

    let result = "";
    let curDelimiter = "";

    if (Array.isArray(value)) {
      for (const v of value) {
        const string = toDelimitedString(v, delimiter, stringify);
        if (string) {
          result += curDelimiter + string;
          curDelimiter = delimiter;
        }
      }
    } else if (typeof value === "object") {
      for (const name in value) {
        const string = stringify(name, value[name]);
        if (string) {
          result += curDelimiter + string;
          curDelimiter = delimiter;
        }
      }
    }

    return result;
  }
}
