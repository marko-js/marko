// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
_resume_dynamic_tag();
const $tagselect_content__setup__render = /*@__PURE__*/ _render(($scope) => {
	_attrs($scope, "#option/0", { value: "a" });
	_attrs($scope, "#option/1", { value: "b" });
	_attrs($scope, "#option/2", { value: "c" });
});
const $tagselect_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_attrs_script($scope, "#option/0");
	_attrs_script($scope, "#option/1");
	_attrs_script($scope, "#option/2");
});
const $tagselect_content__setup = ($scope) => {
	$tagselect_content__setup__render($scope);
	$tagselect_content__setup__script($scope);
};
const $tagselect_content = _content_resume("__tests__/template.marko_1_content", "<option>A</option><option>B</option><option>C</option>", " b b b", $tagselect_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tagselect_content);
const $value__OR__tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.tag ? "select" : {}, () => ({
	value: $scope.value,
	valueChange: $valueChange($scope)
})));
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.value));
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	$value__render($scope);
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
