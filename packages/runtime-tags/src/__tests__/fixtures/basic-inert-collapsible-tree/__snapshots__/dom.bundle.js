// total: 2699 (min) 1391 (brotli)
// tags/comments.marko: 137 (min) 121 (brotli)
const $for_content__open__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$for_content__open($scope, !$scope.m);
}));
const $for_content__open = /* @__PURE__ */ _let(12, ($scope) => {
	_attr($scope.a, "hidden", !$scope.m);
	_text($scope.d, $scope.m ? "[-]" : "[+]");
	$for_content__open__script($scope);
});
