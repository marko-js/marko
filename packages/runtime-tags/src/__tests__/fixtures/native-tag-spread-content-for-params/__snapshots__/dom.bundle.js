// tags/child.marko
const $for_content__r__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $for_content__r = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$for_content__r__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__r($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<div></div>", " ", 0, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);

// template.marko
const $row_content__i__OR__x = /*@__PURE__*/ _or(6, ($scope) => _text($scope.c, $scope.d + ($scope.f ? 10 : 0)));
const $row_content__x = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.b, typeof $scope.f);
	$row_content__i__OR__x($scope);
});
const $row_content__$params = ($scope, $params3) => $row_content__x($scope, $params3[0]);
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<!>:<!>:<!>", "%c%c%", 0, $row_content__$params), { 3($scope) {
	_text($scope.a, $scope.d);
	$row_content__i__OR__x($scope);
} });
const $list = /*@__PURE__*/ _let(2, ($scope) => {
	let $row;
	forOf($scope.c, (i) => {
		$row = attrTags($row, { content: $row_content($scope, { 3: i }) });
	});
	$input_row($scope.b, $row);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$list($scope, [...$scope.c, $scope.c?.length + 1]);
}));
