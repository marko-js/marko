// size: 335 (min) 128 (brotli)
(_._script(
  "a3",
  ($scope) => ($scope[0].textContent = $scope[5].bar() || "missing a"),
),
  _._script(
    "a4",
    ($scope) => ($scope[1].textContent = $scope[6].baz() || "missing b"),
  ),
  _._script(
    "a5",
    ($scope) => ($scope[2].textContent = $scope[7].baz() || "missing c"),
  ),
  _._resume("a0", function ($scope) {
    return () => $scope[3]?.bar;
  }),
  _._resume("a1", function ($scope) {
    return () => $scope[3]?.bar.baz;
  }),
  _._resume("a2", function ($scope) {
    return () => $scope[4]?.baz;
  }),
  init());
