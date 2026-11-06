// template.marko
const $for_content__option__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $for_content__option = /*@__PURE__*/ _const(3, ($scope) => {
	_attrs($scope, "a", $scope.d);
	_text($scope.b, ($scope.d?.value).toUpperCase());
	$for_content__option__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__option($scope, $params2[0]);
const $tagselect_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<option> </option>", " D ", 0, $for_content__$params);
const $tagselect_content__setup = ($scope) => $tagselect_content__for($scope, [[
	{ value: "a" },
	{ value: "b" },
	{ value: "c" }
]]);
const $tagselect_content = _content("a2", "<!><!><!>", "b%", $tagselect_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $tagselect_content);
const $value__OR__tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.d ? "select" : {}, ($_) => ({
	value: $scope.c,
	valueChange: $valueChange($scope)
})));
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$value__OR__tag($scope);
});
const $valueChange = ($scope) => function(v) {
	$value($scope, v);
};
_resumed.a0 = $valueChange;
