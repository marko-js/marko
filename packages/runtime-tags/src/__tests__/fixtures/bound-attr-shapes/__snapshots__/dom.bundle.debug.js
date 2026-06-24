// template.marko
const $template = "<div><!>|<!></div><input><input>";
const $walks = "D%c%l b b";
const $state3 = ($scope, state) => {
	$state_a($scope, state.a);
	$state_aChange($scope, state.aChange);
	$state_b($scope, state.b);
	$state_bChange($scope, state.bChange);
};
const $a__OR__b = /*@__PURE__*/ _or(6, ($scope) => $state3($scope, {
	a: $scope.a,
	aChange: $state($scope),
	b: $scope.b,
	bChange: $state2($scope)
}));
const $a = /*@__PURE__*/ _let("a/4", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	$a__OR__b($scope);
});
const $b = /*@__PURE__*/ _let("b/5", ($scope) => {
	_text($scope["#text/1"], $scope.b);
	$a__OR__b($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/2");
	_attr_input_value_script($scope, "#input/3");
});
function $setup($scope) {
	$a($scope, "a1");
	$b($scope, "b1");
	$setup__script($scope);
}
const $state_a__OR__state_aChange = /*@__PURE__*/ _or(10, ($scope) => _attr_input_value($scope, "#input/2", $scope.state_a, $scope.state_aChange));
const $state_a = /*@__PURE__*/ _const("state_a", $state_a__OR__state_aChange);
const $state_aChange = /*@__PURE__*/ _const("state_aChange", $state_a__OR__state_aChange);
const $state_b__OR__state_bChange = /*@__PURE__*/ _or(13, ($scope) => _attr_input_value($scope, "#input/3", $scope.state_b, $scope.state_bChange));
const $state_b = /*@__PURE__*/ _const("state_b", $state_b__OR__state_bChange);
const $state_bChange = /*@__PURE__*/ _const("state_bChange", $state_b__OR__state_bChange);
function $state2($scope) {
	return function(v) {
		$b($scope, v);
	};
}
function $state($scope) {
	return function(v) {
		$a($scope, v);
	};
}
_resume("__tests__/template.marko_0/state2", $state2);
_resume("__tests__/template.marko_0/state", $state);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
