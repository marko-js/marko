// tags/counter-box/index.marko
const $template$1 = "<span> </span><button class=mode>b</button>";
const $walks$1 = "D l b";
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _or(7, ($scope) => _return_change($scope, $scope.mode === "a" ? $scope.input_onA : $scope.input_onB), 2);
const $mode = /*@__PURE__*/ _let("mode/6", ($scope) => {
	_text($scope["#text/0"], $scope.mode);
	_return($scope, $scope.mode);
	$input_onA__OR__input_onB__OR__mode($scope);
});
const $setup__script = _script("__tests__/tags/counter-box/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$mode($scope, "b");
}));
function $setup$1($scope) {
	$mode($scope, "a");
	$setup__script($scope);
}
const $input_onA = /*@__PURE__*/ _const("input_onA", $input_onA__OR__input_onB__OR__mode);
const $input_onB = /*@__PURE__*/ _const("input_onB", $input_onA__OR__input_onB__OR__mode);
const $input$1 = ($scope, input) => {
	$input_onA($scope, input.onA);
	$input_onB($scope, input.onB);
};
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1), $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $count = _var_resume("__tests__/template.marko_0_count#7/var", ($scope, count) => _text($scope["#text/2"], count));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $count);
}
const $input_a = ($scope, input_a) => $input_onA($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $input_onB($scope["#childScope/0"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
