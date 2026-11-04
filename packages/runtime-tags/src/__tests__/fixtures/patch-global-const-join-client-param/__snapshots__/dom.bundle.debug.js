// tags/gate.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $if = /*@__PURE__*/ _if("#text/0", "<b>shown</b>");
const $input_on__OR__flag = /*@__PURE__*/ _or_patch("__tests__/tags/gate.marko_0_input_on#4_flag#5/setup", 6, ($scope) => {
	_text($scope["#text/1"], $scope.flag && $scope.input_on ? "on" : "off");
	$if($scope, $scope.flag && $scope.input_on ? 0 : 1);
});
const $flag = /*@__PURE__*/ _const("flag", $input_on__OR__flag);
const $setup__$global_flag = /*@__PURE__*/ _fill_global("__tests__/tags/gate.marko_0_$global_flag#5", ($scope) => $flag($scope, $scope.$global.flag), "flag");
const $setup$1 = $setup__$global_flag;
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__flag);
const $input = ($scope, input) => $input_on($scope, input.on);
var gate_default = /*@__PURE__*/ _template("__tests__/tags/gate.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $on = _let("on/2", ($scope) => $input_on($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$on($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
