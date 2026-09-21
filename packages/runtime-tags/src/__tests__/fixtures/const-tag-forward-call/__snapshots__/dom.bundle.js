// template.marko
const $second_getter = /*@__PURE__*/ _hoist(7);
const $third_getter = _hoist_resume("a8", 9);
const $nullary_getter = /*@__PURE__*/ _hoist(11);
const $defaulted_getter = /*@__PURE__*/ _hoist(13);
const $result = /*@__PURE__*/ _let(5, ($scope) => _text($scope.e, $scope.f));
const $setup__script = _script("a9", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.g();
	});
	_on($scope.b, "click", function() {
		$scope.i();
	});
	_on($scope.c, "click", function() {
		$scope.k();
	});
	_on($scope.d, "click", function() {
		$scope.m();
	});
});
const $first = ($scope) => () => {
	$result($scope, $second_getter($scope)("A", 42));
};
function $second(name, num) {
	return `${name}:${num}`;
}
const $viaAlias = ($scope) => () => {
	const alias = $third_getter($scope);
	$result($scope, alias(1, 2, 3));
};
function $third(...nums) {
	return nums.join("-");
}
const $callNullary = ($scope) => () => {
	$result($scope, $nullary_getter($scope)());
};
function $nullary() {
	return "none";
}
const $callDefaulted = ($scope) => () => {
	$result($scope, $defaulted_getter($scope)("x"));
};
function $defaulted(a, b = "def") {
	return a + ":" + b;
}
_resumed.a0 = $first;
_resumed.a1 = $second;
_resumed.a2 = $viaAlias;
_resumed.a3 = $third;
_resumed.a4 = $callNullary;
_resumed.a5 = $nullary;
_resumed.a6 = $callDefaulted;
_resumed.a7 = $defaulted;
