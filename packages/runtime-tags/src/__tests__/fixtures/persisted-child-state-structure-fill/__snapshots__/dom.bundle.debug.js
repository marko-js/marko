// tags/toggle-panel/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/tags/toggle-panel/index.marko0", "input_title", /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_title)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#div/0", "<em> </em>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title$1($scope, input.title);
};
const $input_title$1 = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-panel/index.marko0", "input_title", $if_content__input_title);
var toggle_panel_default = /*@__PURE__*/ _template("__tests__/tags/toggle-panel/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_show($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = _fill_const("__tests__/template.marko0", "input_title", ($scope) => $input_title$1($scope["#childScope/0"], $scope.input_title));
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
