// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/tags/panel/index.marko1", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._._.input_title), ($scope) => $scope._._), 0);
const $if_content2__setup = $if_content2__input_title;
const $if_content__if = /*@__PURE__*/ _if("#section/0", "<em> </em>", "D ", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _fill_join("__tests__/tags/panel/index.marko0", "input_inner", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1)));
const $if_content__setup = $if_content__input_inner;
const $if = /*@__PURE__*/ _if("#text/0", "<section></section>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_inner$1($scope, input.inner);
	$input_title$1($scope, input.title);
};
const $input_inner$1 = /*@__PURE__*/ _fill_const("__tests__/tags/panel/index.marko0", "input_inner", $if_content__input_inner);
const $input_title__closure = /*@__PURE__*/ _closure($if_content2__input_title);
const $input_title$1 = /*@__PURE__*/ _fill_const("__tests__/tags/panel/index.marko1", "input_title", $input_title__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel/index.marko", $template$1, "b%c", 0, $input$1);

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
const $input_inner = ($scope, input_inner) => $input_inner$1($scope["#childScope/0"], input_inner);
const $input_title = _fill_const("__tests__/template.marko0", "input_title", ($scope) => $input_title$1($scope["#childScope/0"], $scope.input_title));
const $input = ($scope, input) => {
	$input_inner($scope, input.inner);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
