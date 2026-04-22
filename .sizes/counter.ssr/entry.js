// size: 89 (min) 79 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-counter/template.marko
const $clickCount__script = _script("a0", ($scope) =>
  _on($scope.a, "click", function () {
    $clickCount($scope, $scope.c + 1);
  }),
);
const $clickCount = /* @__PURE__ */ _let(2, ($scope) => {
  _text($scope.b, $scope.c);
  $clickCount__script($scope);
});
//#endregion
//#region entry
init();
//#endregion
