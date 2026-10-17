// tags/counter-box/index.marko
const $template$1 = "<span> </span><button class=mode>b</button><button class=go>go</button>";
const $walks$1 = "D l b b";
const $input_onA__OR__input_onB__OR__mode__script = _script("__tests__/tags/counter-box/index.marko_0_input_onA#5_input_onB#6_mode#7", ($scope) => _on($scope["#button/2"], "click", $scope.mode === "a" ? $scope.input_onA : $scope.input_onB));
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _shell_or("__tests__/tags/counter-box/index.marko_0_input_onA#5_input_onB#6_mode#7/init", 8, ($scope) => {
	_return_change($scope, $scope.mode === "a" ? $scope.input_onA : $scope.input_onB);
	$input_onA__OR__input_onB__OR__mode__script($scope);
}, 2);
const $mode = /*@__PURE__*/ _fill_let("__tests__/tags/counter-box/index.marko_fill0", "mode/7", ($scope) => {
	_text($scope["#text/0"], $scope.mode);
	_return($scope, $scope.mode);
	$input_onA__OR__input_onB__OR__mode($scope);
});
const $setup__script = _script("__tests__/tags/counter-box/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$mode($scope, "b");
}));
function $setup$1($scope) {
	$setup__script($scope);
	$mode($scope, "a");
}
const $input_onA = /*@__PURE__*/ _const("input_onA", $input_onA__OR__input_onB__OR__mode);
const $input_onB = /*@__PURE__*/ _const("input_onB", $input_onA__OR__input_onB__OR__mode);
const $input$1 = ($scope, input) => {
	$input_onA($scope, input.onA);
	$input_onB($scope, input.onB);
};
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1), $input$1);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $if_content__input_p = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_p", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$input_onA($scope["#childScope/0"], $onA($scope));
	$input_onB($scope["#childScope/0"], $onB($scope));
}));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], 5, "count");
}));
const $if_content__setup = ($scope) => {
	$if_content__input_p._($scope);
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $if_content__count);
	$if_content__setup__script($scope);
};
const $if_content__count = _var_resume("__tests__/template.marko_1_count#7/var", ($scope, count) => {});
const $last = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "last/6", ($scope) => _text($scope["#text/1"], $scope.last));
function $setup($scope) {
	$last($scope, "none");
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<button class=set>set</button>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_p($scope, input.p);
};
const $input_p = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_p", $if_content__input_p);
const $onB = ($scope) => function(v) {
	$last($scope._, $scope._.input_p + "b" + v);
};
const $onA = ($scope) => function(v) {
	$last($scope._, $scope._.input_p + "a" + v);
};
_resumed["__tests__/template.marko_1/onB"] = $onB;
_resumed["__tests__/template.marko_1/onA"] = $onA;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
