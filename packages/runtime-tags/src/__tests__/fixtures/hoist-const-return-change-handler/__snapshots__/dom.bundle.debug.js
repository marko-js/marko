// template.marko
const $template = "<button> </button>";
const $walks = "0& D l";
const $Counter_content__setCount_getter = _hoist_resume("__tests__/template.marko_1_setCount#1/hoist", "setCount");
const $Counter_content__count = /*@__PURE__*/ _let("count/0", ($scope) => _return($scope, $scope.count));
const $Counter_content__setCount = /*@__PURE__*/ _const("setCount", ($scope) => _assert_hoist($scope.setCount));
const $Counter_content__setup = ($scope) => {
	_return_change($scope, $Counter_content__setCount_getter($scope));
	$Counter_content__count($scope, 0);
	$Counter_content__setCount($scope, $setCount($scope));
};
const $c = _var_resume("__tests__/template.marko_0_c#4/var", /*@__PURE__*/ _const("c", ($scope) => _text($scope["#text/3"], $scope.c)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], +$scope.c + 1, "c");
}));
function $setup($scope) {
	$Counter_content__setup($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $c);
	$setup__script($scope);
}
const $setCount = ($scope) => (value) => {
	$Counter_content__count($scope, value);
};
_resumed["__tests__/template.marko_1/setCount"] = $setCount;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
