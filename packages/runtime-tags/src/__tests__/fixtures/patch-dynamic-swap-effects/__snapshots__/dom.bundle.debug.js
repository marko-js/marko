// card-plain.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var card_plain_default = /*@__PURE__*/ _template("__tests__/card-plain.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_mode__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_mode === "plain" ? card_plain_default : card_live_default, () => ({ label: $scope.input_label })));
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_mode__OR__input_label);
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// card-live.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
const $n = /*@__PURE__*/ _fill_let("__tests__/card-live.marko0", "n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/card-live.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_live_default = /*@__PURE__*/ _template("__tests__/card-live.marko", $template, $walks, $setup, $input);
