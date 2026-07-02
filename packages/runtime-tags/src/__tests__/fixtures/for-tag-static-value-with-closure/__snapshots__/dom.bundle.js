// template.marko
const $for_content__count = /* @__PURE__ */ _for_closure(0, ($scope) => _text($scope.b, $scope._.d));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$for_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.d + 1);
}));
