// tags/label-view.marko
const $template$1 = "<!><!><span>x</span>";
const $walks$1 = "b%b b";
const $if_content__get = /*@__PURE__*/ _fill_signal("get __tests__/tags/label-view.marko_fill4", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.get())));
const $if_content__setup = $if_content__get;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/label-view.marko_fill3", "open/8", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/label-view.marko_0", ($scope) => _on($scope["#span/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $get = /*@__PURE__*/ _fill_const("__tests__/tags/label-view.marko_fill4", "get", $if_content__get);
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_flag __tests__/tags/label-view.marko_fill0,input_a __tests__/tags/label-view.marko_fill1,input_b __tests__/tags/label-view.marko_fill2", /*@__PURE__*/ _or_resume("__tests__/tags/label-view.marko_0_input_flag#4_input_a#5_input_b#6/init", 7, ($scope) => $get($scope, $scope.input_flag ? $scope.input_a : $scope.input_b), 2));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const("input_a", $input_flag__OR__input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_flag__OR__input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_upper#5_up#6_low#7/init", 8, ($scope) => $input_a($scope["#childScope/0"], $scope.upper ? $scope.up : $scope.low), 2);
const $upper = /*@__PURE__*/ _let("upper/5", $upper__OR__up__OR__low);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$upper($scope, !$scope.upper);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
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
