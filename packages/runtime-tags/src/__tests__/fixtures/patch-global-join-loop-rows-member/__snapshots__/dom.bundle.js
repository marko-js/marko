// template.marko
const $for_content__$global_o = /*@__PURE__*/ _global_for("a0", /* @__PURE__ */ _global_key(5, "o", "x"), 2, ($scope) => _text($scope.b, $scope.$.o.x));
const $for_content__setup = ($scope) => {
	_text($scope.a, $scope.M);
	$for_content__$global_o($scope);
};
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li><!>:<!></li>", "D%c%", $for_content__setup);
const $n = _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$n($scope, +$scope.d - 1);
	});
	_on($scope.b, "click", function() {
		$n($scope, +$scope.d + 1);
	});
});
