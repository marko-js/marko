// template.marko
const $PlainChild_content__walks = "Db%l";
const $PlainChild_content__template = "<p>t=<!></p>";
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $PlainChild_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_b", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_a", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_a#3_input_b#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b))));
const $PlainChild_content__input_a = /*@__PURE__*/ _const("input_a", $PlainChild_content__input_a__OR__input_b);
const $PlainChild_content__input_b = /*@__PURE__*/ _const("input_b", $PlainChild_content__input_a__OR__input_b);
const $PlainChild_content__$params = ($scope, $params2) => $PlainChild_content__input($scope, $params2[0]);
const $PlainChild_content__input = ($scope, input) => {
	$PlainChild_content__input_a($scope, input.a);
	$PlainChild_content__input_b($scope, input.b);
};
const $if_content__input_x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_x#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $PlainChild_content__input_b($scope["#childScope/0"], $scope._.input_x))));
const $if_content__setup = ($scope) => {
	$if_content__input_x._($scope);
	$if_content__tab._($scope);
};
const $if_content__tab = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_tab#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $PlainChild_content__input_a($scope["#childScope/0"], $scope._.tab)));
const $tab = _let("tab/6", $if_content__tab);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tab($scope, +$scope.tab + 1);
}));
function $setup($scope) {
	$tab($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($PlainChild_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($PlainChild_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_x($scope, input.x);
};
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $if_content__input_x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
