// tags/leaf.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $if_content__input_label$1 = /*@__PURE__*/ _fill_join("__tests__/tags/leaf.marko0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label)));
const $if_content__setup$1 = $if_content__input_label$1;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup$1);
const $input_flag$2 = ($scope, input_flag) => $if$1($scope, input_flag ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_flag$2($scope, input.flag);
	$input_label$2($scope, input.label);
};
const $input_label$2 = /*@__PURE__*/ _fill_const("__tests__/tags/leaf.marko0", "input_label", $if_content__input_label$1);
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/leaf.marko", $template$2, "b%c", 0, $input$2);

// tags/mid.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__input_flag = /*@__PURE__*/ _fill_join("__tests__/tags/mid.marko0", "input_flag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_flag$2($scope["#childScope/0"], $scope._.input_flag)));
const $if_content__setup = ($scope) => {
	$if_content__input_flag._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/tags/mid.marko1", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$2($scope["#childScope/0"], $scope._.input_label)));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_flag$1($scope, input.flag);
	$input_label$1($scope, input.label);
};
const $input_flag$1 = /*@__PURE__*/ _fill_const("__tests__/tags/mid.marko0", "input_flag", $if_content__input_flag);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/mid.marko1", "input_label", $if_content__input_label);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => $input_show($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_flag = ($scope, input_flag) => $input_flag$1($scope["#childScope/0"], input_flag);
const $input_label = _fill_const("__tests__/template.marko0", "input_label", ($scope) => $input_label$1($scope["#childScope/0"], $scope.input_label));
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
