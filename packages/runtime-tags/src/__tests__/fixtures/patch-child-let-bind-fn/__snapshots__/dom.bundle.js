// tags/picker.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $refreshing = /*@__PURE__*/ _fill_let_change("b0", 7);
const $for = /*@__PURE__*/ _for_of(1, "<li> </li>", "D ", 0, $for_content__$params);
const $catalog = /*@__PURE__*/ _fill_let("b1", 9, ($scope) => $for($scope, [$scope.j || []]));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$scope.k(true);
}));
const $load = ($scope) => async (refresh) => {
	if (refresh) $refreshing($scope, true);
	$catalog($scope, ["a", "b"]);
	if (refresh) $refreshing($scope, false);
};
_resume("b0", $load);

// template.marko
const $busy = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e ? "busy" : "idle"));
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$scope.f();
}));
const $refresh = _var_resume("a1", /*@__PURE__*/ _const(5));
const $refreshingChange = ($scope) => function(v) {
	$busy($scope, v);
};
_resume("a0", $refreshingChange);
