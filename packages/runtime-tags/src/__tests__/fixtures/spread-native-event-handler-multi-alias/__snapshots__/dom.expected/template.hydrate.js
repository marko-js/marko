// size: 365 (min) 166 (brotli)
(_._content_resume("a2", "Click Me", "b"),
  _._script("a3", ($scope) =>
    _._on($scope.a, "click", function () {
      ((document.getElementById("el").textContent += "[onClick(child)]"),
        $scope.d());
    }),
  ),
  _._script("a4", ($scope) => _._attrs_script($scope, "a")),
  _._resume("a1", function () {
    document.getElementById("el").textContent += "[onClick(parent)]";
  }),
  _._resume("a0", function () {
    throw new Error("Should never be called.");
  }),
  init());
