// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $o = /*@__PURE__*/ _let(5, ($scope) => $input_content($scope.b, $scope.f));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));
