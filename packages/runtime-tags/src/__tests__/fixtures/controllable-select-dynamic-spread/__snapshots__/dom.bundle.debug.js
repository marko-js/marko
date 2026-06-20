// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
_resume_dynamic_tag();
const $tagselect_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_attrs_script($scope, "#option/0");
	_attrs_script($scope, "#option/1");
	_attrs_script($scope, "#option/2");
});
const $tagselect_content__setup = ($scope) => {
	_attrs($scope, "#option/0", { value: "a" });
	_attrs($scope, "#option/1", { value: "b" });
	_attrs($scope, "#option/2", { value: "c" });
	$tagselect_content__setup__script($scope);
};
const $tagselect_content = _content_resume("__tests__/template.marko_1_content", "<option>A</option><option>B</option><option>C</option>", " b b b", $tagselect_content__setup);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $tagselect_content);
const $value = /* @__PURE__ */ _let("value/2", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$dynamicTag($scope, "select" ? "select" : {}, () => ({
		value: $scope.value,
		valueChange: $valueChange($scope)
	}));
});
function $setup($scope) {
	$value($scope, "b");
}
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
