// total: 2675 (min) 1382 (brotli)
// template.marko: 191 (min) 125 (brotli)
const $if_content__count = /* @__PURE__ */ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.d));
const $count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$if_content__count($scope);
	$count__script($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {}));
