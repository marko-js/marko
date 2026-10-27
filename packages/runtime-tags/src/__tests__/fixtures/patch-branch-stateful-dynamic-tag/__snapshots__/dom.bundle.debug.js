// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $countbi_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe"), 0);
const $countbi_content__setup = $countbi_content__input_label;
const $countbi_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $countbi_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $countbi_content);
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.count ? "b" : "i")));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($countbi_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
