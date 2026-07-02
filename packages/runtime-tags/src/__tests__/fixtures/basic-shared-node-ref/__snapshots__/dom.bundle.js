// template.marko
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $open = /* @__PURE__ */ _let(3, ($scope) => _attr($scope.a, "hidden", !$scope.d));
const $for = /* @__PURE__ */ _for_of(0, "<li> </li>", "D l", 0, $for_content__$params);
const $list = /* @__PURE__ */ _let(4, ($scope) => $for($scope, [$scope.e, function(x) {
	return x;
}]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$open($scope, !$scope.d);
	});
	_on($scope.c, "click", function() {
		$list($scope, [].concat($scope.e).reverse());
	});
});
