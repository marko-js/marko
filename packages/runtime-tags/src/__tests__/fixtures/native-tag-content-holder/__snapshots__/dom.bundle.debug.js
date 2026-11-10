// tags/row.marko
const $template$1 = "<section></section><!><!>";
const $walks$1 = " b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_header__OR__input_tag = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_tag, ($_) => ({ content: $scope.input_header })));
const $input_header = /*@__PURE__*/ _const("input_header", ($scope) => {
	_attr_content($scope, "#section/0", $scope.input_header);
	$input_header__OR__input_tag($scope);
});
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_header__OR__input_tag);
const $input = ($scope, input) => {
	$input_header($scope, input.header);
	$input_tag($scope, input.tag);
};
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div></div>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $header_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "Header");
const $Label_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Label");
const $Label = ($scope, Label) => _attr_content($scope, "#div/0", Label);
function $setup($scope) {
	$input_header($scope["#childScope/1"], attrTag({ content: $header_content($scope) }));
	$input_tag($scope["#childScope/1"], "section");
	$Label($scope, { content: $Label_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
