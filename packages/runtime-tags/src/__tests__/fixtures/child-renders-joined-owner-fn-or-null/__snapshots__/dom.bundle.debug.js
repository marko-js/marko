// tags/label-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $get = ($scope, get) => _text($scope["#text/0"], get && get());
const $input_flag__OR__input_a = /*@__PURE__*/ _or(5, ($scope) => $get($scope, $scope.input_flag ? $scope.input_a : null));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_flag__OR__input_a);
const $input$1 = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_a($scope, input.a);
};
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $up = ($scope, up) => $input_a($scope["#childScope/0"], up);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $up($scope, () => "U" + $scope.input_title));
function $setup($scope) {
	$input_flag($scope["#childScope/0"], true);
}
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
