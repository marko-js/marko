// tags/counter.marko
const $template$2 = "<button class=inc><!> <!></button>";
const $walks$2 = " D%c%l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/6", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_return($scope, $scope.n);
});
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_label$2 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$2, $walks$2, /*@__PURE__*/ _return_setup($setup$2), $input$2);

// tags/other.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
function $setup$1($scope) {
	_return($scope, -1);
}
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var other_default = /*@__PURE__*/ _template("__tests__/tags/other.marko", $template$1, "D l", /*@__PURE__*/ _return_setup($setup$1), $input$1);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1b D l";
const $setup = () => {};
_fill_var("__tests__/template.marko_0_count#9/var");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $count);
const $count__script = _script("__tests__/template.marko_0_count#9", ($scope) => _el_read($scope["#p/2"]).dataset.count = String($scope.count));
const $count = _var_resume("__tests__/template.marko_0_count#9/var", /*@__PURE__*/ _const("count", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$count__script($scope);
}));
const $input_which__OR__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_which", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_which#6_input_label#7/init", 8, ($scope) => $dynamicTag($scope, $scope.input_which ? counter_default : other_default, () => ({ label: $scope.input_label })))));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_which__OR__input_label);
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
