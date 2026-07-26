// tags/my-menu/index.marko
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $for_content__item = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<button></button>", " ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(_content_resume("a1", "Click <!>", "b%"), { 4($scope) {
	_text($scope.a, $scope.e);
} });
const $clicked = /*@__PURE__*/ _let(2, ($scope) => {
	let $item;
	forOf(["a", "b"], (foo) => {
		$item = attrTags($item, {
			onClick: $onClick({
				_: $scope,
				e: foo
			}),
			content: $item_content($scope, { 4: foo })
		});
	});
	$input_item($scope.a, $item);
	_text($scope.b, $scope.c);
});
function $onClick($locals) {
	return function() {
		const $scope = $locals._;
		$clicked($scope, $scope.c + $locals.e);
	};
}
_resume("a0", $onClick);
