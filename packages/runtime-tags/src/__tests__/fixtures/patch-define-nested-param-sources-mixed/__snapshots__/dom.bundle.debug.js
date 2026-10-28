// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Outer_content__walks);
const $Outer_content__setup = ($scope) => $scope["#childScope/0"]._ = $scope._;
const $Outer_content__a__OR__b = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "b", /*@__PURE__*/ _or(5, ($scope) => $Inner_content__v($scope["#childScope/0"], $scope.a || $scope.b)));
const $Outer_content__a = /*@__PURE__*/ _const("a", $Outer_content__a__OR__b);
const $Outer_content__b = /*@__PURE__*/ _const("b", $Outer_content__a__OR__b);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__a($scope, $temp2.a);
	$Outer_content__b($scope, $temp2.b);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe"), 0);
const $if_content__setup = $if_content__input_label;
const $Inner_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Inner_content__v = ($scope, v) => $Inner_content__if($scope, v ? 0 : 1);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => $Inner_content__v($scope, $temp.v);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => $Outer_content__a($scope["#childScope/0"], $scope.n % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Outer_content__setup($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_flag = ($scope, input_flag) => $Outer_content__b($scope["#childScope/0"], input_flag);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_flag($scope, input.flag);
};
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
