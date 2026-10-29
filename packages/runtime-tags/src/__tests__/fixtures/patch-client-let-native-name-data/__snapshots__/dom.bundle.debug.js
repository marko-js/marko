// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_tag = ($scope, input_tag) => $input_tag$1($scope["#childScope/0"], input_tag);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $T_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/tags/outer.marko_1_input_label#0:4/subscribe"), 0);
const $T_content__setup = ($scope) => {
	$T_content__input_label($scope);
	$T_content__T($scope);
};
const $T_content__T = /*@__PURE__*/ _closure_get("T/7", ($scope) => _text($scope["#text/0"], $scope._.T));
const $T_content = _content("__tests__/tags/outer.marko_1*content", "<!>:<!>", "%c%", $T_content__setup);
_content_resume($T_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $T_content);
const $T__closure = /*@__PURE__*/ _closure($T_content__T);
const $T = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("T/5", ($scope) => {
	$dynamicTag($scope, $scope.T, ($_) => ({ title: $scope.T }));
	$T__closure($scope);
}));
const $input_tag = $T;
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($T_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_label", $input_label__closure);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "b%c", 0, $input);
