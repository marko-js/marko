// template.marko
const base = { label: $label };
var Base = class {
	label() {
		return "Base";
	}
};
const $make2 = /*@__PURE__*/ _const(3);
const $makeClass2 = /*@__PURE__*/ _const(4);
const $makeBound2 = /*@__PURE__*/ _const(5);
const $count2 = /*@__PURE__*/ _const(6);
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	$make2($scope, $make($scope));
	$makeClass2($scope, $makeClass($scope));
	$makeBound2($scope, $makeBound($scope));
	$count2($scope, $count($scope));
});
const $text = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$text($scope, [
		$scope.d().label(),
		new ($scope.e())().label(),
		$scope.f().call({ label: "bound" }),
		$scope.g({ arguments: [1, 2] })
	].join(" "));
	$n($scope, +$scope.c + 1);
}));
function $label() {
	return "base";
}
const $make = ($scope) => () => ({
	__proto__: base,
	label() {
		return super.label() + $scope.c;
	}
});
const $makeClass = ($scope) => () => class extends Base {
	label() {
		return super.label() + $scope.c;
	}
};
const $makeBound = ($scope) => () => function() {
	return this.label + $scope.c;
};
const $count = ($scope) => (call) => ({ arguments: call.arguments.length + $scope.c }).arguments;
_resumed.a0 = $label;
_resumed.a1 = $make;
_resumed.a2 = $makeClass;
_resumed.a3 = $makeBound;
_resumed.a4 = $count;
