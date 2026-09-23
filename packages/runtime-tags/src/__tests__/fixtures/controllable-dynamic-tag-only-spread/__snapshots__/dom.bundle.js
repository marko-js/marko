// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content("a1", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>"));
const $value__OR__tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.d, () => ({
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
