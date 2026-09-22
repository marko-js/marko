// tags/my-menu/index.marko
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $for_content__item = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<button></button>", " ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", "Click <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
const $clicked = /*@__PURE__*/ _let(2, ($scope) => {
	let $item;
	forOf(["a", "b"], (foo) => {
		$item = attrTags($item, {
			onClick: $onClick({
				_: $scope,
				f: foo
			}),
			content: $item_content($scope, { 1: foo })
		});
	});
	$input_item($scope.a, $item);
	_text($scope.b, $scope.c);
});
const $onClick = ($locals) => function() {
	const $scope = $locals._;
	$clicked($scope, $scope.c + $locals.f);
};
_resumed.a0 = $onClick;
