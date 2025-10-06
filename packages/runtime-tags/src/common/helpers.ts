export function classValue(classValue: unknown) {
  return toDelimitedString(classValue, " ", stringifyClassObject);
}

function stringifyClassObject(name: string, value: unknown) {
  return value ? name : "";
}

export function styleValue(styleValue: unknown) {
  return toDelimitedString(styleValue, ";", stringifyStyleObject);
}

function stringifyStyleObject(name: string, value: unknown) {
  return value || value === 0 ? name + ":" + value : "";
}

function toDelimitedString(
  val: unknown,
  delimiter: string,
  stringify: (n: string, v: unknown) => string | undefined,
) {
  let str = "";
  let sep = "";
  let part: string | undefined;
  if (val) {
    if (typeof val !== "object") {
      str += val;
    } else if (Array.isArray(val)) {
      for (const v of val) {
        part = toDelimitedString(v, delimiter, stringify);
        if (part) {
          str += sep + part;
          sep = delimiter;
        }
      }
    } else {
      for (const name in val) {
        part = stringify(name, (val as Record<string, unknown>)[name]);
        if (part) {
          str += sep + part;
          sep = delimiter;
        }
      }
    }
  }

  return str;
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
  if (value) {
    if (typeof value === "string") return value;
    const normalized = value.content || value.default || value;
    if ("___id" in normalized) {
      return normalized;
    }
  }
}
