// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content2__walks);
const $props_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $Panel_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Panel_content2__props_content = $Panel_content2__dynamicTag;
const $Panel_content2__$params = ($scope, $params2) => $Panel_content2__props($scope, $params2[0]);
const $Panel_content2__props = ($scope, props) => $Panel_content2__props_content($scope, props.content);
const $Panel_content__input_a = /*@__PURE__*/ _closure_get("input_a/6", ($scope) => _text($scope["#text/0"], $scope._.input_a), 0, "__tests__/template.marko_1_input_a#0:3/subscribe");
const $Panel_content__setup = ($scope) => {
	$Panel_content__input_a($scope);
	$Panel_content__input_b($scope);
	$Panel_content__input_c($scope);
};
const $Panel_content__input_b = /*@__PURE__*/ _closure_get("input_b/7", ($scope) => _text($scope["#text/1"], $scope._.input_b), 0, "__tests__/template.marko_1_input_b#0:4/subscribe");
const $Panel_content__input_c = /*@__PURE__*/ _closure_get("input_c/8", ($scope) => _text($scope["#text/2"], $scope._.input_c), 0, "__tests__/template.marko_1_input_c#0:5/subscribe");
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p><p> </p><p> </p>", "D lD lD ", $Panel_content__setup);
function $setup($scope) {
	$props_content_direct($scope["#childScope/0"], $Panel_content($scope));
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_c($scope, input.c);
};
const $input_a__closure = /*@__PURE__*/ _closure($Panel_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($Panel_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
const $input_c__closure = /*@__PURE__*/ _closure($Panel_content__input_c);
const $input_c = /*@__PURE__*/ _const("input_c", $input_c__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
