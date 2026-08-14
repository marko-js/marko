// tags/badge/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $if_content__setup = $if_content__input_note;
const $if = /*@__PURE__*/ _if("#div/0", "<i> </i>", "D ", $if_content__setup);
const $input_label = ($scope, input_label) => $if($scope, input_label ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_note($scope, input.note);
};
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)(" b");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_label($scope["#childScope/0"], "hi");
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => $input_note($scope["#childScope/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
