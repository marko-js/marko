// size: 122 (min) 104 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/tags/comments.marko
const $for_content__open__script = _script("a0", ($scope) =>
  _on($scope.c, "click", function () {
    $for_content__open($scope, !$scope.m);
  }),
);
const $for_content__open = /* @__PURE__ */ _let(12, ($scope) => {
  _attr($scope.a, "hidden", !$scope.m);
  _text($scope.d, $scope.m ? "[-]" : "[+]");
  $for_content__open__script($scope);
});
//#endregion
//#region entry
init();
//#endregion
