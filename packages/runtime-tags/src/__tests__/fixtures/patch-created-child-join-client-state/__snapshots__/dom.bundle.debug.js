// tags/plain-child.marko
const $template$1 = "<p>t=<!></p>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_a__OR__input_b = /*@__PURE__*/ _init_or("__tests__/tags/plain-child.marko_0_input_a#3_input_b#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var plain_child_default = /*@__PURE__*/ _template("__tests__/tags/plain-child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $if_content__input_x = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_b($scope["#childScope/0"], $scope._.input_x)));
const $if_content__setup = ($scope) => {
	$if_content__input_x._($scope);
	$if_content__tab._($scope);
};
const $if_content__tab = _init_if_closure("__tests__/template.marko_1_tab#0:6/init", "#text/1", 0, ($scope) => $input_a($scope["#childScope/0"], $scope._.tab));
const $tab = /*@__PURE__*/ _let("tab/6", $if_content__tab);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tab($scope, +$scope.tab + 1);
}));
function $setup($scope) {
	$tab($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_x($scope, input.x);
};
const $input_x = _fill_const_resume("__tests__/template.marko_fill0", "input_x", $if_content__input_x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
