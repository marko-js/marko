// template.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
_resume_dynamic_tag();
const $tag_content = _content_resume("__tests__/template.marko_1_content", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tag_content);
const $value__OR__tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.tag, () => ({
	value: $scope.value,
	valueChange: $valueChange($scope)
})));
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	_text($scope, "#text/1", $scope.value);
	$value__OR__tag($scope);
});
const $tag = /*@__PURE__*/ _const("tag", $value__OR__tag);
function $setup($scope) {
	$value($scope, "b");
	$tag($scope, "select");
}
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
