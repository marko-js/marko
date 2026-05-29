// total: 6994 (min) 3233 (brotli)
// template.marko: 188 (min) 151 (brotli)
const $for_content__num = /* @__PURE__ */ _for_closure(0, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$num($scope._, $scope._.b + 1);
})));
const $for_content__setup = ($scope) => {
	$for_content__num._($scope);
	_text($scope.b, $scope.M);
};
const $for = /* @__PURE__ */ _for_to(0, "<button> </button>", " D l", $for_content__setup);
const $num = /* @__PURE__ */ _let(1, ($scope) => {
	$for($scope, [
		$scope.b,
		0,
		1
	]);
	$for_content__num($scope);
});
