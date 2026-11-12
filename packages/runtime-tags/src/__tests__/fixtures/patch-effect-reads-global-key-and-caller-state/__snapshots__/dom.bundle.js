// tags/child.marko
const $global_user_name = /*@__PURE__*/ _global_closure("b4", /* @__PURE__ */ _global_key(9, "user", "name"));
const $input_page__OR__input_n__OR__$global_user_name__script = _script_patch("b1 d e", ($scope) => {
	$input_page__OR__input_n__OR__$global_user_name.r($scope);
	$scope.a.textContent = $scope.$.user.name + ":" + $scope.d + $scope.e;
});
const $input_page__OR__input_n__OR__$global_user_name = /*@__PURE__*/ _global_or(6, $input_page__OR__input_n__OR__$global_user_name__script, $global_user_name);
const $input_page__OR__input_n__script = _script_patch("b0 d e", ($scope) => $scope.a.title = $scope.d + $scope.e);
const $input_page__OR__input_n = /*@__PURE__*/ _or_patch("b2", 5, ($scope) => {
	$input_page__OR__input_n__OR__$global_user_name($scope);
	$input_page__OR__input_n__script($scope);
});
const $input_page = /*@__PURE__*/ _const(3, $input_page__OR__input_n);

// template.marko
const $page = _let(5, ($scope) => $input_page($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$page($scope, $scope.f + "!");
}));
