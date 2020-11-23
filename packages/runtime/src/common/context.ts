export let Context: Record<string, unknown> | null = null;
let usesContext = false;

export function pushContext(key: string, value: unknown) {
  usesContext = true;
  (Context = Object.create(Context))[key] = value;
}

export function popContext() {
  Context = Context!.prototype as Record<string, unknown>;
}

export function getInContext(key: string) {
  if (
    ("MARKO_DEBUG" && !Context) ||
    !Object.prototype.hasOwnProperty.call(Context, key)
  ) {
    throw new Error(`Unable to receive ${key} from current context`);
  }

  return Context![key];
}

export function setContext(v: Record<string, unknown> | null) {
  usesContext && (Context = v);
}
