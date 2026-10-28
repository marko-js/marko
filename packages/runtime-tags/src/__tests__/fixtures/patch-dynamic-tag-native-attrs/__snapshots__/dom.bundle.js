// template.marko
const $n = /*@__PURE__*/ _let(16, ($scope) => _text($scope.b, $scope.q));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.q + 1);
}));
function $onClick() {
	console.log("clicked");
}
function $checkedChange(next) {
	console.log(next);
}
_resumed.a0 = $onClick;
_resumed.a1 = $checkedChange;
