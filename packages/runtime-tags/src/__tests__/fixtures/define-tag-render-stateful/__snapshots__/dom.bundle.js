// total: 2687 (min) 1374 (brotli)
// template.marko: 133 (min) 113 (brotli)
const $MyTag_content__count = ($scope, count) => _text($scope.b, count);
const $count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$MyTag_content__count($scope.c, $scope.d);
	$count__script($scope);
});
