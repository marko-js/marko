// size: 161 (min) 119 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-counter/template.marko
const $template = "<div><button> </button></div>";
const $walks = "D D m";
const $clickCount = /* @__PURE__ */ _let(2, ($scope) =>
  _text($scope.b, $scope.c),
);
const $setup__script = _script("a0", ($scope) =>
  _on($scope.a, "click", function () {
    $clickCount($scope, $scope.c + 1);
  }),
);
function $setup($scope) {
  $clickCount($scope, 0);
  $setup__script($scope);
}
//#endregion
//#region entry
/* @__PURE__ */ _template("a", $template, $walks, $setup).mount();
//#endregion
