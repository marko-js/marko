// size: 83 (min) 79 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-counter/template.marko
const $clickCount = /*@__PURE__*/ _let(
  2,
  /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c)),
);
_script("a0", ($scope) =>
  _on($scope.a, "click", function () {
    $clickCount($scope, $scope.c + 1);
  }),
);
//#endregion
//#region entry
init();
//#endregion
