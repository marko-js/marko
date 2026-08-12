// tags/badge/index.marko
const $template$1 = "<div><!><i> </i></div>";
const $walks$1 = "D%bD m";
const $setup$1 = () => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", "<b> </b>", "D ", $if_content__setup);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$if($scope, $scope.input_label ? 0 : 1);
	$if_content__input_label($scope);
});
const $input_note = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_note($scope, input.note);
};
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)($walks$1);
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
