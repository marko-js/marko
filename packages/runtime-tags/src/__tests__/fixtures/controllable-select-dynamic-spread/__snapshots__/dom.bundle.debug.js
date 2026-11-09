// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $for_content__option__script = _script("__tests__/template.marko_2_option#3", ($scope) => _attrs_script($scope, "#option/0"));
const $for_content__option = /*@__PURE__*/ _const("option", ($scope) => {
	_attrs($scope, "#option/0", $scope.option);
	_text($scope["#text/1"], ($scope.option?.value).toUpperCase());
	$for_content__option__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__option($scope, $params2[0]);
const $tagselect_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<option> </option>", " D ", 0, $for_content__$params);
const $tagselect_content__setup = ($scope) => $tagselect_content__for($scope, [[
	{ value: "a" },
	{ value: "b" },
	{ value: "c" }
]]);
const $tagselect_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $tagselect_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tagselect_content);
const $value__OR__tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.tag ? "select" : {}, ($_) => ({
	value: $scope.value,
	valueChange: $valueChange($scope)
})));
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$value__OR__tag($scope);
});
const $tag = /*@__PURE__*/ _const("tag", $value__OR__tag);
function $setup($scope) {
	$value($scope, "b");
	$tag($scope, "select");
}
const $valueChange = ($scope) => function(v) {
	$value($scope, v);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
