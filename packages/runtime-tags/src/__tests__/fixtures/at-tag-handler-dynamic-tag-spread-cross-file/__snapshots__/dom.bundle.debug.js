// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
_resume_dynamic_tag();
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag__OR__input_button = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_tag, () => $scope.input_button));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_button);
const $input_button = /*@__PURE__*/ _const("input_button", $input_tag__OR__input_button);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_button($scope, input.button);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $button_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count));
const $button_content__setup = $button_content__count;
const $button_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $button_content__setup);
const $count__closure = /*@__PURE__*/ _closure($button_content__count);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$input_button($scope["#childScope/0"], attrTag({
		onClick: $onClick($scope),
		content: $button_content($scope)
	}));
	$count__closure($scope);
});
function $setup($scope) {
	$input_tag($scope["#childScope/0"], "button");
	$count($scope, 0);
}
const $onClick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
