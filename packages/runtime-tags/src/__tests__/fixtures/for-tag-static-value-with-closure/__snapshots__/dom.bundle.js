// total: 2877 (min) 1455 (brotli)
// template.marko: 143 (min) 114 (brotli)
const $for_content__count = /* @__PURE__ */ _for_closure(0, ($scope) => _text($scope.b, $scope._.d));
const $count__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$for_content__count($scope);
	$count__script($scope);
});
