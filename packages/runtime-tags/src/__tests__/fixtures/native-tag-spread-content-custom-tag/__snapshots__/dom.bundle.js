// tags/btn.marko
const $template = "<button></button>";
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$input__script($scope);
});

// tags/child.marko
const $for_content__item = ($scope, item) => $input($scope.a, {
	...item,
	class: "item"
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content2 = /*@__PURE__*/ _content("a2", "Two");
const $item_content__count = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.a, $scope._.b));
const $item_content = /*@__PURE__*/ _content("a1", "One <!>", "b%", $item_content__count);
const $count__closure = /*@__PURE__*/ _closure($item_content__count);
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$input_item($scope.a, attrTags(attrTag({
		onClick: $onClick($scope),
		content: $item_content($scope)
	}), { content: $item_content2($scope) }));
	$count__closure($scope);
});
const $onClick = ($scope) => function() {
	$count($scope, +$scope.b + 1);
};
_resumed.a0 = $onClick;
