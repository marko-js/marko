// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content2__f = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_f#1:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "f", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.f()))));
const $if_content2__setup = $if_content2__f;
const $if_content__input_a = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_a", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Show_content__v($scope["#childScope/0"], $scope._.input_a)));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$Show_content__setup($scope["#childScope/0"]);
};
const $Show_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $Show_content__input_x = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _closure_get("input_x/7", ($scope) => $Show_content__if($scope, $scope._.input_x ? 0 : 1), 0, "__tests__/template.marko_1_input_x#0:4/subscribe"), 0);
const $Show_content__setup = $Show_content__input_x;
const $Show_content__f = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "f", $if_content2__f);
const $Show_content__v = /*@__PURE__*/ _const("v", ($scope) => $Show_content__f($scope, $f($scope)));
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => $Show_content__v($scope, $temp.v);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks), $if_content__setup);
const $show = _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_a($scope, input.a);
};
const $input_x__closure = /*@__PURE__*/ _closure($Show_content__input_x);
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $input_x__closure);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_a", $if_content__input_a);
const $f = ($scope) => function() {
	return $scope.v;
};
_bind_resume("__tests__/template.marko_1/f v", $f);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
