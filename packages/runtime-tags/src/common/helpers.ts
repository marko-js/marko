export function classValue(value: unknown) {
  return toDelimitedString(value, " ", stringifyClassObject);
}

function stringifyClassObject(name: string, value: unknown) {
  return value ? name : "";
}

export function styleValue(value: unknown) {
  return toDelimitedString(value, ";", stringifyStyleObject);
}

function stringifyStyleObject(name: string, value: unknown) {
  return value || value === 0
    ? `${name}:${
        typeof value === "number" &&
        value &&
        !/^(--|ta|or|li|z)|cou|nk|it|ag|we|do|w$/.test(name)
          ? value + "px"
          : value
      }`
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

export function isEventHandler(name: string): name is `on${string}` {
  return /^on[A-Z-]/.test(name);
}
export function getEventHandlerName(name: `on${string}`) {
  return name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase();
}

export function isVoid(value: unknown) {
  return value == null || value === false;
}

export function alphaEncode(num: number): string {
  return num < 52
    ? String.fromCharCode(num < 26 ? num + 97 : num + (65 - 26))
    : alphaEncode((num / 52) | 0) + alphaEncode(num % 52);
}

export function normalizeDynamicRenderer<Renderer>(
  value: any,
): Renderer | string | undefined {
  if (value) return value.content || value.default || value;
}
