// tags/counter-box/index.marko
const $template$1 = "<span> </span><button class=mode>b</button>";
const $walks$1 = "D l b";
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _or_resume("__tests__/tags/counter-box/index.marko_0_input_onA#4_input_onB#5_mode#6/init", 7, ($scope) => _return_change($scope, $scope.mode === "a" ? $scope.input_onA : $scope.input_onB), 2);
const $mode = /*@__PURE__*/ _fill_let("__tests__/tags/counter-box/index.marko_fill0", "mode/6", ($scope) => {
	_text($scope["#text/0"], $scope.mode);
	_return($scope, $scope.mode);
	$input_onA__OR__input_onB__OR__mode($scope);
}, ($scope) => {
	_text($scope["#text/0"], $scope.mode);
	_return($scope, $scope.mode);
});
const $setup__script$1 = _script("__tests__/tags/counter-box/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$mode($scope, "b");
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$mode($scope, "a");
}
const $input_onA = /*@__PURE__*/ _const("input_onA", $input_onA__OR__input_onB__OR__mode);
const $input_onB = /*@__PURE__*/ _const("input_onB", $input_onA__OR__input_onB__OR__mode);
const $input = ($scope, input) => {
	$input_onA($scope, input.onA);
	$input_onB($scope, input.onB);
};
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1), $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=set>set</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks$1);
const $last = _let("last/4", ($scope) => _text($scope["#text/2"], $scope.last));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], 5, "count");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_onA($scope["#childScope/0"], $onA($scope));
	$input_onB($scope["#childScope/0"], $onB($scope));
	_var($scope, "#childScope/0", $count);
	$last($scope, "none");
	$setup__script($scope);
}
const $count = _var_resume("__tests__/template.marko_0_count#4/var", ($scope, count) => {});
const $onB = ($scope) => function(v) {
	$last($scope, "b" + v);
};
const $onA = ($scope) => function(v) {
	$last($scope, "a" + v);
};
_resumed["__tests__/template.marko_0/onB"] = $onB;
_resumed["__tests__/template.marko_0/onA"] = $onA;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
