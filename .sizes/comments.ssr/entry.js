// size: 129 (min) 119 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/tags/comments.marko
const $for_content__open = /*@__PURE__*/ _let(12, ($scope) => {
  _attr($scope.a, "hidden", !$scope.m);
  _text($scope.d, $scope.m ? "[-]" : "[+]");
});
_script("a0", ($scope) =>
  _on($scope.c, "click", function () {
    $for_content__open($scope, !("m" in $scope ? $scope.m : true));
  }),
);
//#endregion
//#region entry
init();
//#endregion
