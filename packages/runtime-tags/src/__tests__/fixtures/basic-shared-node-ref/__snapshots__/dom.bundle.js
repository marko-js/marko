// template.marko
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $open__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.d);
}));
const $open = /* @__PURE__ */ _let(3, ($scope) => {
	_attr($scope.a, "hidden", !$scope.d);
	$open__script($scope);
});
const $for = /* @__PURE__ */ _for_of(0, "<li> </li>", "D l", 0, $for_content__$params);
const $list__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$list($scope, [].concat($scope.e).reverse());
}));
const $list = /* @__PURE__ */ _let(4, ($scope) => {
	$for($scope, [$scope.e, function(x) {
		return x;
	}]);
	$list__script($scope);
});
