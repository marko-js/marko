// tags/child.marko
const $template$1 = "<button>go</button>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input_act_pending = ($scope, input_act_pending) => _attr($scope["#button/0"], "disabled", input_act_pending);
const $input_act__script = _script("__tests__/tags/child.marko_0_input_act#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_act));
const $input_act = /*@__PURE__*/ _const("input_act", ($scope) => {
	$input_act_pending($scope, $scope.input_act?.pending);
	$input_act__script($scope);
});
const $input = ($scope, input) => $input_act($scope, input.act);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", 0, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $act2 = _action("act/1", "__tests__/template.marko_0_act#1/action", ($scope) => $input_act($scope["#childScope/0"], $scope.act));
function $setup($scope) {
	$act2($scope, $act);
}
async function $act() {
	await new Promise((resolve) => setTimeout(resolve, 100));
}
_resumed["__tests__/template.marko_0/act"] = $act;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
