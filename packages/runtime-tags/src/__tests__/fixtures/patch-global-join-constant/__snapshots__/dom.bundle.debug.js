// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $global_suffix_key = /*@__PURE__*/ _global_key("suffix");
const $Inner_content__$global_suffix = /*@__PURE__*/ _global_closure($global_suffix_key, "__tests__/template.marko_2_$global_suffix#0:16/subscribe");
const $Inner_content__$global_suffix__OR__b = /*@__PURE__*/ _global_or(($scope) => _text($scope["#text/0"], $scope.b + _global_read($scope.$global, "suffix")), $Inner_content__$global_suffix);
const $Inner_content__b = /*@__PURE__*/ _const("b", $Inner_content__$global_suffix__OR__b);
const $Inner_content__value__OR__y = /*@__PURE__*/ _or(4, ($scope) => $Inner_content__b($scope, $scope._.value + $scope.y));
const $Inner_content__value = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_value#1:5/subscribe", "value/9", $Inner_content__value__OR__y);
const $Inner_content__setup = $Inner_content__value;
const $Inner_content__y = /*@__PURE__*/ _const("y", $Inner_content__value__OR__y);
const $Inner_content__$params = ($scope, $params3) => $Inner_content__$temp($scope, $params3[0]);
const $Inner_content__$temp = ($scope, $temp2) => $Inner_content__y($scope, $temp2.y);
const $Outer_content__count = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_count#6/fill", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $Outer_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$Outer_content__count($scope, +$scope.count + 1);
}));
const $Outer_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$Inner_content__setup($scope["#childScope/0"]);
	$Inner_content__y($scope["#childScope/0"], 1);
	$Outer_content__setup__script($scope);
	$Outer_content__count($scope, 0);
};
const $Outer_content__$params = ($scope, $params2) => $Outer_content__value($scope, $params2[0].value);
const $Outer_content__value__closure = /*@__PURE__*/ _closure($Inner_content__value);
const $Outer_content__value = /*@__PURE__*/ _const("value", $Outer_content__value__closure);
const $Outer_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($Inner_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($Inner_content__walks), $Outer_content__setup, $Outer_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_n__OR__Outer = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_show#3_input_n#4_Outer#5/setup", 6, ($scope) => $dynamicTag($scope, $scope.input_show && $scope.Outer, ($_) => ({ value: $scope.input_n })), 2);
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
