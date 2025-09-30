export function isEventOrChangeHandler(prop: string) {
  return /^on[-A-Z][a-zA-Z0-9_$]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$/.test(prop);
}
