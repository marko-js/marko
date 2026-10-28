// tags/child.marko
const $template$1 = "<span> </span><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = ($_) => {};
const $if_content__input_a$1 = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_a#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a))));
const $if_content__setup$1 = $if_content__input_a$1;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<em> </em>", "D ", $if_content__setup$1);
const $input_v = ($scope, input_v) => {
	_text($scope["#text/0"], input_v);
	$if$1($scope, input_v ? 0 : 1);
};
const $input$1 = ($scope, input) => {
	$input_v($scope, input.v);
	$input_a$1($scope, input.a);
};
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", $if_content__input_a$1);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_a__OR__x = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_a#0:4_x#3/init", 4, ($scope) => _text($scope["#text/2"], $scope.x + $scope._.input_a)), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_a__OR__x($scope);
	$input_a$1($scope["#childScope/0"], $scope._.input_a);
})));
const $if_content__y = _fill_resume("__tests__/template.marko_fill2", /*@__PURE__*/ _let("y/5", ($scope) => $input_v($scope["#childScope/0"], $scope.y)));
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "x/3", ($scope) => {
	$if_content__input_a__OR__x($scope);
	$if_content__y($scope, $scope.x);
}, $if_content__input_a__OR__x);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__x($scope, 2);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__x($scope, 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
