import { xmlAttr } from "./content";

const invalidAttrNameReg = /[\s'"</=\\]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
const validAttrNames: Record<string, boolean> = Object.create(null);
const invalidAttrNames: Record<string, boolean> = Object.create(null);

export function attr(name: string, val: unknown) {
  if (val === true) {
    return ` ${name}`;
  }

  const escaped = xmlAttr(val);

  if (escaped === "") {
    return "";
  }

  return ` ${name}="${escaped}"`;
}

export function attrs(data: Record<string, unknown>) {
  let result = "";

  for (const name in data) {
    if (isValidAttrName(name)) {
      result += attr(name, data[name]);
    }
  }

  return result;
}

function isValidAttrName(name: string) {
  if (validAttrNames[name]) {
    return true;
  }

  if (invalidAttrNames[name]) {
    return false;
  }

  if (invalidAttrNameReg.test(name)) {
    invalidAttrNames[name] = true;
    return false;
  } else {
    validAttrNames[name] = true;
    return true;
  }
}
