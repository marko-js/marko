// tags/comments.marko
const $for_content__open = /* @__PURE__ */ _let(12, ($scope) => {
	_attr($scope.a, "hidden", !$scope.m);
	_text($scope.d, $scope.m ? "[-]" : "[+]");
});
const $for_content__setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$for_content__open($scope, !$scope.m);
}));
