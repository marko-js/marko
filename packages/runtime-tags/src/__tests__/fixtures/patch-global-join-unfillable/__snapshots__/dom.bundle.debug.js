// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $Inner_content__b__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "__tests__/template.marko_2_$global_suffix#0:16_b#5", ($scope) => _text($scope["#text/0"], $scope.b + _global_read($scope.$global, "suffix")));
const $Inner_content__b = /*@__PURE__*/ _const("b", $Inner_content__b__$global_suffix);
const $Inner_content__value__OR__y = /*@__PURE__*/ _shell_or("__tests__/template.marko_2_value#1:4_y#3/init", 4, ($scope) => $Inner_content__b($scope, $scope._.value + $scope.y));
const $Inner_content__value = /*@__PURE__*/ _closure_get("value/6", $Inner_content__value__OR__y, 0, "__tests__/template.marko_2_value#1:4/subscribe");
const $Inner_content__setup = $Inner_content__value;
const $Inner_content__y = /*@__PURE__*/ _const("y", $Inner_content__value__OR__y);
const $Inner_content__$params = ($scope, $params3) => $Inner_content__$temp($scope, $params3[0]);
const $Inner_content__$temp = ($scope, $temp2) => $Inner_content__y($scope, $temp2.y);
const $Outer_content__count = /*@__PURE__*/ _let("count/5", ($scope) => $Inner_content__y($scope["#childScope/0"], $scope.count));
const $Outer_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$Outer_content__count($scope, +$scope.count + 1);
}));
const $Outer_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$Inner_content__setup($scope["#childScope/0"]);
	$Outer_content__count($scope, 0);
	$Outer_content__setup__script($scope);
};
const $Outer_content__$params = ($scope, $params2) => $Outer_content__value($scope, $params2[0].value);
const $Outer_content__value__closure = /*@__PURE__*/ _closure($Inner_content__value);
const $Outer_content__value = /*@__PURE__*/ _const("value", $Outer_content__value__closure);
const $Outer_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>inc</button>`)($Inner_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Inner_content__walks), $Outer_content__setup, $Outer_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_n__OR__Outer = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_n", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_show", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_show#3_input_n#4_Outer#5/init", 6, ($scope) => $dynamicTag($scope, $scope.input_show && $scope.Outer, ($_) => ({ value: $scope.input_n })), 2)));
const $Outer = /*@__PURE__*/ _const("Outer", $input_show__OR__input_n__OR__Outer);
function $setup($scope) {
	$Outer($scope, { content: $Outer_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_n__OR__Outer);
const $input_n = /*@__PURE__*/ _const("input_n", $input_show__OR__input_n__OR__Outer);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
