// template.marko
const $pattern3 = _var_resume("b0", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$inc($scope, $pattern.inc);
});
const $count = ($scope, count) => _text($scope.g, count);
const $inc__OR__dynamicInc = /*@__PURE__*/ _or(17, _script("b2", ($scope) => _on($scope.f, "click", function() {
	$scope.n();
	$scope.q();
})), 1, 4);
const $inc = /*@__PURE__*/ _const(13, $inc__OR__dynamicInc);
const $pattern4 = _var_resume("b1", ($scope, $pattern2) => {
	$dynamicCount($scope, $pattern2.count);
	$dynamicInc($scope, $pattern2.inc);
});
const $dynamicCount = ($scope, dynamicCount) => _text($scope.h, dynamicCount);
const $dynamicInc = /*@__PURE__*/ _const(16, $inc__OR__dynamicInc);

// child.marko
const $template = "<p>n <!></p>";
const $walks = "Db%l";
const $n = /*@__PURE__*/ _let(1, ($scope) => {
	_text($scope.a, $scope.b);
	_return($scope, {
		count: $scope.b,
		inc: $_return($scope)
	});
});
function $setup($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => () => $n($scope, +$scope.b + 1) - 1;
_resumed.a0 = $_return;
var child_default = /*@__PURE__*/ _template("a", $template, $walks, $setup);
