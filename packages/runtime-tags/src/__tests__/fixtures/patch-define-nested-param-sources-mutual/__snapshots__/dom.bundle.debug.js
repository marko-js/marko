// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Outer_content__template);
const $Relay_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrapper_content__walks);
const $Relay_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrapper_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Wrapper_content__walks);
const $if_content__a = /*@__PURE__*/ _init_resume("__tests__/template.marko_5_a#3:4/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Relay_content__b($scope["#childScope/0"], $scope._.a)));
const $if_content__setup = ($scope) => {
	$if_content__a._($scope);
	$if_content__b._($scope);
	$if_content__depth._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$Relay_content__setup($scope["#childScope/0"]);
};
const $if_content__b = /*@__PURE__*/ _init_resume("__tests__/template.marko_5_b#3:5/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Relay_content__a($scope["#childScope/0"], $scope._.b)));
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Relay_content__depth($scope["#childScope/0"], $scope._.depth - 1));
const $Relay_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._._;
	$Wrapper_content__setup($scope["#childScope/0"]);
};
const $Relay_content__b = ($scope, b) => $Wrapper_content__tag_input_a($scope["#childScope/0"], b);
const $Relay_content__a = ($scope, a) => $Wrapper_content__tag_input_b($scope["#childScope/0"], a);
const $Relay_content__depth = ($scope, depth) => $Wrapper_content__tag_input_depth($scope["#childScope/0"], depth);
const $Relay_content__$params = ($scope, $params5) => $Relay_content__$temp($scope, $params5[0]);
const $Relay_content__$temp = ($scope, $temp4) => {
	$Relay_content__a($scope, $temp4.a);
	$Relay_content__b($scope, $temp4.b);
	$Relay_content__depth($scope, $temp4.depth);
};
const $Wrapper_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Outer_content__setup($scope["#childScope/0"]);
};
const $Wrapper_content__tag_input_a = /*@__PURE__*/ _const("a", ($scope) => {
	$Outer_content__tag_input_x($scope["#childScope/0"], $scope.a);
	$if_content__a($scope);
});
const $Wrapper_content__tag_input_b = /*@__PURE__*/ _const("b", ($scope) => {
	$Outer_content__y($scope["#childScope/0"], $scope.b);
	$if_content__b($scope);
});
const $Wrapper_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Relay_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Relay_content__walks), $if_content__setup);
const $Wrapper_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$Wrapper_content__if($scope, $scope.depth ? 0 : 1);
	$if_content__depth($scope);
});
const $Wrapper_content__$params = ($scope, $params4) => $Wrapper_content__$temp($scope, $params4[0]);
const $Wrapper_content__$temp = ($scope, $temp3) => {
	$Wrapper_content__tag_input_a($scope, $temp3.a);
	$Wrapper_content__tag_input_b($scope, $temp3.b);
	$Wrapper_content__tag_input_depth($scope, $temp3.depth);
};
const $Inner_content__input_label__OR__x__OR__z = /*@__PURE__*/ _fill_join("| __tests__/template.marko_fill1", "x", /*@__PURE__*/ _fill_join("| __tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_label#0:4_x#1:3_z#3/init", 4, ($scope) => _text($scope["#text/0"], $scope._._.input_label + $scope._.x + $scope.z), 2)));
const $Inner_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", $Inner_content__input_label__OR__x__OR__z, ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe");
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__x($scope);
};
const $Inner_content__x = /*@__PURE__*/ _closure_get("x/8", $Inner_content__input_label__OR__x__OR__z, 0, "__tests__/template.marko_2_x#1:3/subscribe");
const $Inner_content__z = /*@__PURE__*/ _const("z", $Inner_content__input_label__OR__x__OR__z);
const $Inner_content__$params = ($scope, $params3) => $Inner_content__$temp($scope, $params3[0]);
const $Inner_content__$temp = ($scope, $temp2) => $Inner_content__z($scope, $temp2.z);
const $Outer_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$Inner_content__setup($scope["#childScope/0"]);
};
const $Outer_content__y = ($scope, y) => $Inner_content__z($scope["#childScope/0"], y);
const $Outer_content__tag_input_x__closure = /*@__PURE__*/ _closure($Inner_content__x);
const $Outer_content__tag_input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "x", $Outer_content__tag_input_x__closure);
const $Outer_content__$params = ($scope, $params2) => $Outer_content__$temp($scope, $params2[0]);
const $Outer_content__$temp = ($scope, $temp) => {
	$Outer_content__tag_input_x($scope, $temp.x);
	$Outer_content__y($scope, $temp.y);
};
const $n = /*@__PURE__*/ _let("n/6", ($scope) => $Wrapper_content__tag_input_b($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Wrapper_content__setup($scope["#childScope/0"]);
	$Wrapper_content__tag_input_depth($scope["#childScope/0"], 2);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => $Wrapper_content__tag_input_a($scope["#childScope/0"], input_a);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_a($scope, input.a);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
