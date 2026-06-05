// template.marko
function createWrapper(a) {
	return { a };
}
const $pattern2 = ($scope, $pattern) => $a($scope, $pattern.a);
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	$pattern2($scope, createWrapper($scope.d));
	$count__script($scope);
});
const $a = ($scope, a) => {
	_text($scope.b, a);
	$b($scope, a);
};
const $b = ($scope, a) => _text($scope.c, a);
