// tags/label-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $get = ($scope, get) => _text($scope["#text/0"], get());
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _or(6, ($scope) => $get($scope, $scope.input_flag ? $scope.input_a : $scope.input_b), 2);
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
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $up2 = ($scope, up) => $input_a($scope["#childScope/0"], up);
const $low2 = ($scope, low) => $input_b($scope["#childScope/0"], low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
function $setup($scope) {
	$input_flag($scope["#childScope/0"], true);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_0/up"] = $up;
_resumed["__tests__/template.marko_0/low"] = $low;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
