export function isEventOrChangeHandler(prop: string) {
  // Any name ending in `Change` counts as a change handler, deliberately wider
  // than the native controllables; `on` names match the runtime's isEventHandler.
  return /^on[-A-Z]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$/.test(prop);
}
