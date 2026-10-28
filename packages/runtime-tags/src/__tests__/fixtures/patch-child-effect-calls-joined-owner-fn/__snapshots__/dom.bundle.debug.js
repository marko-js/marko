// tags/label-view.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/label-view.marko_0_get#7", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get = /*@__PURE__*/ _const("get", $get__script);
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_flag __tests__/tags/label-view.marko_fill0,input_a __tests__/tags/label-view.marko_fill1,input_b __tests__/tags/label-view.marko_fill2", /*@__PURE__*/ _or_resume("__tests__/tags/label-view.marko_0_input_flag#3_input_a#4_input_b#5/init", 6, ($scope) => $get($scope, $scope.input_flag ? $scope.input_a : $scope.input_b), 2));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const("input_a", $input_flag__OR__input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_flag__OR__input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>more</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)(" b");
const $n = /*@__PURE__*/ _let("n/5", ($scope) => $input_a($scope["#childScope/0"], $a($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_flag($scope["#childScope/0"], false);
	$n($scope, 0);
	$setup__script($scope);
}
const $low2 = ($scope, low) => $input_b($scope["#childScope/0"], low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $low2($scope, $low($scope)));
const $input = ($scope, input) => $input_title($scope, input.title);
const $a = ($scope) => () => "x" + $scope.n;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_0/a"] = $a;
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
