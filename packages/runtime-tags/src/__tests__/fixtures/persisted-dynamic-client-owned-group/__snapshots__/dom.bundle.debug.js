// tags/picker/card.marko
const $template$2 = "<em><!> <!></em>";
const $walks$2 = "D%c%l";
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/tags/picker/card.marko_0_$global_brand#5/global", ($scope, $global_brand) => _text($scope["#text/1"], $scope.$global.brand));
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
function $setup$2($scope) {
	$global_brand($scope, $scope.$global.brand);
}
var card_default = /*@__PURE__*/ _template("__tests__/tags/picker/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/picker/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : null, () => ({ label: $scope.input_label })));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_on__OR__input_label);
const $input$1 = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label$1($scope, input.label);
};
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $input_on($scope["#childScope/0"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input_label = _fill_const("__tests__/template.marko0", "input_label", ($scope) => $input_label$1($scope["#childScope/0"], $scope.input_label));
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
