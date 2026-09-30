// size: 81 (min) 80 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/let/let-increment-handler/template.marko
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
_script("o0", ($scope) =>
  _on($scope.a, "click", function () {
    $clickCount($scope, +$scope.c + 1);
  }),
);
//#endregion
//#region entry
init();
//#endregion
