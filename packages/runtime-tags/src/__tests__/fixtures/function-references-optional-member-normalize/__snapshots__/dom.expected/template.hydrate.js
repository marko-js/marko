// size: 326 (min) 135 (brotli)
(_._script(
  "a3",
  ($scope) => ($scope.a.textContent = $scope.f.bar() || "missing a"),
),
  _._script(
    "a4",
    ($scope) => ($scope.b.textContent = $scope.g.baz() || "missing b"),
  ),
  _._script(
    "a5",
    ($scope) => ($scope.c.textContent = $scope.h.baz() || "missing c"),
  ),
  _._resume("a0", function ($scope) {
    return () => $scope.d?.bar;
  }),
  _._resume("a1", function ($scope) {
    return () => $scope.d?.bar.baz;
  }),
  _._resume("a2", function ($scope) {
    return () => $scope.e?.baz;
  }),
  init());
