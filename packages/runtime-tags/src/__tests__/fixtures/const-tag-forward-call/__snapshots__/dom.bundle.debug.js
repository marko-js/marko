// template.marko
const $template = "<button id=direct>direct</button><button id=alias>alias</button><button id=nullary>nullary</button><button id=defaulted>defaulted</button><div> </div>";
const $walks = " b b b bD l";
const $second_getter = /*@__PURE__*/ _hoist("second");
const $third_getter = _hoist_resume("__tests__/template.marko_0_third#9/hoist", "third");
const $nullary_getter = /*@__PURE__*/ _hoist("nullary");
const $defaulted_getter = /*@__PURE__*/ _hoist("defaulted");
const $result = /*@__PURE__*/ _let("result/5", ($scope) => _text($scope["#text/4"], $scope.result));
const $first2 = /*@__PURE__*/ _const("first");
const $second2 = /*@__PURE__*/ _const("second", ($scope) => _assert_hoist($scope.second));
const $viaAlias2 = /*@__PURE__*/ _const("viaAlias");
const $third2 = /*@__PURE__*/ _const("third", ($scope) => _assert_hoist($scope.third));
const $callNullary2 = /*@__PURE__*/ _const("callNullary");
const $nullary2 = /*@__PURE__*/ _const("nullary", ($scope) => _assert_hoist($scope.nullary));
const $callDefaulted2 = /*@__PURE__*/ _const("callDefaulted");
const $defaulted2 = /*@__PURE__*/ _const("defaulted", ($scope) => _assert_hoist($scope.defaulted));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.first();
	});
	_on($scope["#button/1"], "click", function() {
		$scope.viaAlias();
	});
	_on($scope["#button/2"], "click", function() {
		$scope.callNullary();
	});
	_on($scope["#button/3"], "click", function() {
		$scope.callDefaulted();
	});
});
function $setup($scope) {
	$result($scope, "pending");
	$first2($scope, $first($scope));
	$second2($scope, $second);
	$viaAlias2($scope, $viaAlias($scope));
	$third2($scope, $third);
	$callNullary2($scope, $callNullary($scope));
	$nullary2($scope, $nullary);
	$callDefaulted2($scope, $callDefaulted($scope));
	$defaulted2($scope, $defaulted);
	$setup__script($scope);
}
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
_resume("__tests__/template.marko_0/first", $first);
_resume("__tests__/template.marko_0/second", $second);
_resume("__tests__/template.marko_0/viaAlias", $viaAlias);
_resume("__tests__/template.marko_0/third", $third);
_resume("__tests__/template.marko_0/callNullary", $callNullary);
_resume("__tests__/template.marko_0/nullary", $nullary);
_resume("__tests__/template.marko_0/callDefaulted", $callDefaulted);
_resume("__tests__/template.marko_0/defaulted", $defaulted);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
