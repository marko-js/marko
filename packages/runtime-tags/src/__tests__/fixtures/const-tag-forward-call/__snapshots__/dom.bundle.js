// template.marko
const $second_getter = /*@__PURE__*/ _hoist(7);
const $third_getter = _hoist_resume("a4", 9);
const $nullary_getter = /*@__PURE__*/ _hoist(11);
const $defaulted_getter = /*@__PURE__*/ _hoist(13);
const $result = /*@__PURE__*/ _let(5, ($scope) => _text($scope.e, $scope.f));
const $setup__script = _script("a5", ($scope) => {
	_on($scope.a, "click", function() {
		($scope.g ||= $first($scope))();
	});
	_on($scope.b, "click", function() {
		($scope.i ||= $viaAlias($scope))();
	});
	_on($scope.c, "click", function() {
		($scope.k ||= $callNullary($scope))();
	});
	_on($scope.d, "click", function() {
		($scope.m ||= $callDefaulted($scope))();
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
_resumed.a0 = $second;
_resumed.a1 = $third;
_resumed.a2 = $nullary;
_resumed.a3 = $defaulted;
