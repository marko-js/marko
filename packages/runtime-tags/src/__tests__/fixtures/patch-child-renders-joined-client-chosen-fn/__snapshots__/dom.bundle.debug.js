// tags/label-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/label-view.marko_0_get#7", ($scope) => console.log("run", $scope.get()));
const $get = /*@__PURE__*/ _const("get", ($scope) => {
	_text($scope["#text/0"], $scope.get());
	$get__script($scope);
});
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _fill_join("__tests__/tags/label-view.marko_fill2", "input_b", /*@__PURE__*/ _fill_join("__tests__/tags/label-view.marko_fill1", "input_a", /*@__PURE__*/ _fill_join("__tests__/tags/label-view.marko_fill0", "input_flag", /*@__PURE__*/ _or_resume("__tests__/tags/label-view.marko_0_input_flag#3_input_a#4_input_b#5/init", 6, ($scope) => $get($scope, $scope.input_flag ? $scope.input_a : $scope.input_b), 2))));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const("input_a", $input_flag__OR__input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_flag__OR__input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_upper#5_up#6_low#7/init", 8, ($scope) => $input_a($scope["#childScope/0"], $scope.upper ? $scope.up : $scope.low), 2);
const $upper = /*@__PURE__*/ _let("upper/5", $upper__OR__up__OR__low);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$upper($scope, !$scope.upper);
}));
function $setup($scope) {
	$input_flag($scope["#childScope/0"], true);
	$upper($scope, false);
	$setup__script($scope);
}
const $up2 = /*@__PURE__*/ _const("up", $upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", ($scope) => {
	$upper__OR__up__OR__low($scope);
	$input_b($scope["#childScope/0"], $scope.low);
});
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input = ($scope, input) => $input_title($scope, input.title);
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/up input_title", $up);
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
