// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_value = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_content, () => [$scope.input_value]));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_content__OR__input_value);
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_value($scope, input.value);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $child_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $child_content__$params = ($scope, $params2) => $child_content__x($scope, $params2[0]);
const $child_content = _content_resume("__tests__/template.marko_1_content", " ", " b", 0, $child_content__$params);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
	$input_value($scope["#childScope/0"], "Hi");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
