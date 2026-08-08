// template.marko
const $template = "<!><!><!><div><!>|<!></div>";
const $walks = "b%b%bD%c%l";
_resume_dynamic_tag();
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
	_text($scope["#text/2"], $scope.a);
	$a__OR__b($scope);
});
const $b = /*@__PURE__*/ _let("b/5", ($scope) => {
	_text($scope["#text/3"], $scope.b);
	$a__OR__b($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $state_a__OR__state_aChange__OR__tag = /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.tag, () => ({
	value: $scope.state_a,
	valueChange: $scope.state_aChange
})), 2);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $state_b__OR__state_bChange__OR__tag = /*@__PURE__*/ _or(14, ($scope) => $dynamicTag2($scope, $scope.tag, () => ({
	value: $scope.state_b,
	valueChange: $scope.state_bChange
})), 2);
const $tag = /*@__PURE__*/ _const("tag", ($scope) => {
	$state_a__OR__state_aChange__OR__tag($scope);
	$state_b__OR__state_bChange__OR__tag($scope);
});
function $setup($scope) {
	$a($scope, "a1");
	$b($scope, "b1");
	$tag($scope, "input");
}
const $state_a = /*@__PURE__*/ _const("state_a", $state_a__OR__state_aChange__OR__tag);
const $state_aChange = /*@__PURE__*/ _const("state_aChange", $state_a__OR__state_aChange__OR__tag);
const $state_b = /*@__PURE__*/ _const("state_b", $state_b__OR__state_bChange__OR__tag);
const $state_bChange = /*@__PURE__*/ _const("state_bChange", $state_b__OR__state_bChange__OR__tag);
const $state2 = ($scope) => function(v) {
	$b($scope, v);
};
const $state = ($scope) => function(v) {
	$a($scope, v);
};
_resume("__tests__/template.marko_0/state2", $state2);
_resume("__tests__/template.marko_0/state", $state);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
