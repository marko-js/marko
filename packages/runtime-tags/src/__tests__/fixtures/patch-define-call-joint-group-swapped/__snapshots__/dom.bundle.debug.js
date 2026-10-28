// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>toggle</button>`)($Show_content__template, $Show_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Show_content__walks, $Show_content__walks);
const $if_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe"), 0);
const $if_content__setup = $if_content__input_label;
const $Show_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Show_content__a__OR__b = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "b", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "a", /*@__PURE__*/ _or(5, ($scope) => $Show_content__if($scope, $scope.a || $scope.b ? 0 : 1))));
const $Show_content__a = /*@__PURE__*/ _const("a", $Show_content__a__OR__b);
const $Show_content__b = /*@__PURE__*/ _const("b", $Show_content__a__OR__b);
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => {
	$Show_content__a($scope, $temp.a);
	$Show_content__b($scope, $temp.b);
};
const $on = /*@__PURE__*/ _let("on/7", ($scope) => {
	$Show_content__a($scope["#childScope/0"], $scope.on);
	$Show_content__b($scope["#childScope/1"], $scope.on);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$scope["#childScope/1"]._ = $scope;
	$on($scope, true);
	$setup__script($scope);
}
const $input_flag = ($scope, input_flag) => {
	$Show_content__b($scope["#childScope/0"], input_flag);
	$Show_content__a($scope["#childScope/1"], input_flag);
};
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_flag($scope, input.flag);
};
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
