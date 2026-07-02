// template.marko
const $MyTag_content__count = ($scope, count) => _text($scope.b, count);
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$MyTag_content__count($scope.c, $scope.d);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
