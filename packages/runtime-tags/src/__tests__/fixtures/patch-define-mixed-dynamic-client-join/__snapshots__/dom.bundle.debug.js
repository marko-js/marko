// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)($Panel_content__walks);
const $Panel_content__input_title__OR__value = /*@__PURE__*/ _fill_signal("input_title __tests__/template.marko_fill0/unpatched", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_title#0:5_value#3/init", 4, ($scope) => _text($scope["#text/0"], $scope.value + $scope._.input_title)), _closure_subscribers, "input_title/10", 0);
const $Panel_content__input_title = /*@__PURE__*/ _closure_get("input_title/10", $Panel_content__input_title__OR__value, 0, "__tests__/template.marko_1_input_title#0:5/subscribe");
const $Panel_content__setup = $Panel_content__input_title;
const $Panel_content__value = /*@__PURE__*/ _const("value", $Panel_content__input_title__OR__value);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__value($scope, $temp.value);
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_dyn__OR__n__OR__Panel = /*@__PURE__*/ _fill_signal("input_dyn __tests__/template.marko_fill1", /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_dyn ? $scope.Panel : null, ($_) => ({ value: $scope.n })), 2));
const $n = /*@__PURE__*/ _let("n/7", $input_dyn__OR__n__OR__Panel);
const $Panel = /*@__PURE__*/ _const("Panel", $input_dyn__OR__n__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Panel_content__setup($scope["#childScope/0"]);
	$Panel_content__value($scope["#childScope/0"], "s");
	$n($scope, 0);
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
}
const $input_dyn = /*@__PURE__*/ _const("input_dyn", $input_dyn__OR__n__OR__Panel);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_dyn($scope, input.dyn);
};
const $input_title__closure = /*@__PURE__*/ _closure($Panel_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
