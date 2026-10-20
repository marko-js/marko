// tags/panel.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=t>t</button>`)($Row_content__template, $Row_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks);
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/panel.marko_2_input_a#0:5_input_b#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._._.input_a + $scope._._.input_b)), "input_a/9", 0), "input_b/10", 0);
const $if_content__input_a = _closure_resume("__tests__/tags/panel.marko_2_input_a#0:5/subscribe", /*@__PURE__*/ _closure_get("input_a/9", $if_content__input_a__OR__input_b, ($scope) => $scope._._));
const $if_content__setup = ($scope) => {
	$if_content__input_a($scope);
	$if_content__input_b($scope);
};
const $if_content__input_b = _closure_resume("__tests__/tags/panel.marko_2_input_b#0:6/subscribe", /*@__PURE__*/ _closure_get("input_b/10", $if_content__input_a__OR__input_b, ($scope) => $scope._._));
const $Row_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Row_content__show = ($scope, show) => $Row_content__if($scope, show ? 0 : 1);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__show($scope, $temp.show);
const $t = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_fill2", "t/8", ($scope) => $Row_content__show($scope["#childScope/0"], $scope.t));
const $setup__script$1 = _script("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$t($scope, !$scope.t);
}));
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$scope["#childScope/1"]._ = $scope;
	$setup__script$1($scope);
	$t($scope, true);
}
const $input_show$1 = ($scope, input_show) => $Row_content__show($scope["#childScope/1"], input_show);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
	$input_show$1($scope, input.show);
};
const $input_a__closure = /*@__PURE__*/ _closure($if_content__input_a);
const $input_a$1 = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($if_content__input_b);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_b__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/8", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, $scope.n + "k");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$n($scope, "k");
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/0"], input_show);
	$input_show$1($scope["#childScope/1"], input_show);
};
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_show($scope, input.show);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
