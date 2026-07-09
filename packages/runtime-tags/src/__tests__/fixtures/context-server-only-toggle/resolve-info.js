// Sentinel reachable only through the provider's context value expression;
// the optimize dom bundle pins that this module tree-shakes out even though
// consumers of the context render client-side.
export default function resolveInfo($global, _marker) {
  return $global.theme;
}
