// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $o_c($scope, $scope.f?.c));
const $o_c = /*@__PURE__*/ _const(6, ($scope) => $input_content($scope.b, $scope.g));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, {});
}));
