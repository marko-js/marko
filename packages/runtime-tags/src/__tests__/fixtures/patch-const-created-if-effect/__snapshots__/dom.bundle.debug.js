// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $if_content__n__OR__y = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "y", /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/0"], $scope.y + $scope._.n)));
const $if_content__y__script = _script("__tests__/template.marko_1_y#1", ($scope) => console.log("const", $scope.y));
const $if_content__y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "y", ($scope) => {
	$if_content__n__OR__y($scope);
	$if_content__y__script($scope);
}, /*@__PURE__*/ _fill_mark("y", $if_content__n__OR__y));
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__y($scope, $scope._.input_label + "!"))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__n._($scope);
};
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__n__OR__y));
const $n = _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
