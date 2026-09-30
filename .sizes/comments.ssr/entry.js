// size: 115 (min) 100 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/tags/comments.marko
const $for_content__open = /*@__PURE__*/ _let(12, ($scope) => {
  _attr($scope.a, "hidden", !$scope.m);
  _text($scope.d, $scope.m ? "[-]" : "[+]");
});
_script("o0", ($scope) =>
  _on($scope.c, "click", function () {
    $for_content__open($scope, !$scope.m);
  }),
);
//#endregion
//#region entry
init();
//#endregion
