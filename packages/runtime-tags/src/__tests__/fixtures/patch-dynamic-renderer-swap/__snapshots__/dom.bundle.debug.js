// card-a.marko
const $template$2 = "<section class=a> </section>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var card_a_default = /*@__PURE__*/ _template("__tests__/card-a.marko", $template$2, "D l", 0, $input$2);

// card-b.marko
const $template$1 = "<article class=b><!>!</article>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var card_b_default = /*@__PURE__*/ _template("__tests__/card-b.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_mode__OR__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_mode", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_mode#5_input_label#6/init", 7, ($scope) => $dynamicTag($scope, $scope.input_mode === "a" ? card_a_default : card_b_default, () => ({ label: $scope.input_label })))));
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_mode__OR__input_label);
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
