// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $o = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $o_content($scope, $scope.f?.content));
const $o_content = /*@__PURE__*/ _const(6, ($scope) => $input_content($scope.b, $scope.g));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, { content: void 0 });
}));
