function toStringArray(
  value: unknown,
  stringify: (n: string, v: string) => string | undefined,
  array: string[] = []
) {
  if (value) {
    if (typeof value === "string") {
      array.push(value);
    } else if (Array.isArray(value)) {
      for (const v of value) {
        toStringArray(v, stringify, array);
      }
    } else if (typeof value === "object") {
      for (const name in value) {
        const string = stringify(name, value[name]);
        if (string) {
          array.push(string);
        }
      }
    }
  }
  return array;
}

const stringifyClassObject = (name, value) => value && name;
export function classAttr(value: unknown) {
  const classes = toStringArray(value, stringifyClassObject);
  if (classes.length) {
    return classes.join(" ");
  }
}

const dashedNames = {};
const stringifyStyleObject = (name: string, value: unknown) => {
  if (value != null) {
    if (typeof value === "number" && value) {
      (value as any) += "px";
    }

    let nameDashed = dashedNames[name];
    if (!nameDashed) {
      nameDashed = dashedNames[name] = name
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase();
    }
    return nameDashed + ":" + value;
  }
};
export function styleAttr(value: unknown) {
  const styles = toStringArray(value, stringifyStyleObject);
  if (styles.length) {
    return styles.join(";");
  }
}
