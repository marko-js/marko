// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $ybbi_content__input_v = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _closure_get("input_v/5", ($scope) => _text($scope["#text/0"], $scope._._.input_v), ($scope) => $scope._._, "__tests__/template.marko_2_input_v#0:4/subscribe"), 0);
const $ybbi_content__setup = $ybbi_content__input_v;
const $ybbi_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $ybbi_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $ybbi_content);
const $if_content__y = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _let("y/1", ($scope) => $if_content__dynamicTag($scope, $scope.y === "b" ? "b" : "i")));
const $if_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__y($scope, $scope._.input_v))));
const $if_content__setup = $if_content__input_v;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
const $input_v__closure = /*@__PURE__*/ _closure($ybbi_content__input_v);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", ($scope) => {
	$if_content__input_v($scope);
	$input_v__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
