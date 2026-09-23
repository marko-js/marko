// tags/child.marko
const $for_content__it_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__it_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $item = ($scope, item) => $for($scope, [item]);
const $rest = ($scope, rest) => _text($scope.b, Object.keys(rest).join());

// template.marko
const $item_content = /*@__PURE__*/ _content("a0", "A");
const $mode = /*@__PURE__*/ _let(2, ($scope) => {
	let $item$1, $other;
	if ($scope.c === 0) $item$1 = attrTag({ content: $item_content($scope) });
	else $other = attrTag({ x: 1 });
	$item($scope.b, $item$1);
	$rest($scope.b, { other: $other });
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, 1 - $scope.c);
}));
