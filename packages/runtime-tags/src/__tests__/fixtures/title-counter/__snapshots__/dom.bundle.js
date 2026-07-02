// template.marko
const $count__script = _script("a0", ($scope) => {
	$scope.d;
	$scope.c.textContent = document.title;
});
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text_content($scope.a, `Count is ${_to_text($scope.d)}`);
	$count__script($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.d + 1);
}));
