// Sentinel reachable only through the provider's context value expression;
// the optimize dom bundle pins that this module tree-shakes out.
export default function resolveTheme($global, _marker) {
  return $global.theme;
}
