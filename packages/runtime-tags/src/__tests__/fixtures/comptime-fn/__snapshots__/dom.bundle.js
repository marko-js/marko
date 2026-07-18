// v:template.marko.comptime.1fb1ff30.js
const _fn0 = (step) => function stepper(n) {
	return n + step;
};

// template.marko
const stepper = _fn0(3);
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, stepper($scope.c));
}));
