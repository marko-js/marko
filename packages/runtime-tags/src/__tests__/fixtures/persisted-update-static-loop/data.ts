// A module value: render-once by contract (the list never refreshes), but
// branch content reading $global must still refresh on navigation.
export function getCategories() {
  return ["home", "tools", "toys"];
}
