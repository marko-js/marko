// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $xabi_content__input_w = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/0"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:4/subscribe"), 0);
const $xabi_content__setup = $xabi_content__input_w;
const $xabi_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $xabi_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $xabi_content);
const $x = _let("x/5", ($scope) => $dynamicTag($scope, $scope.x === "a" ? "b" : "i"));
const $input_v = $x;
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($xabi_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
