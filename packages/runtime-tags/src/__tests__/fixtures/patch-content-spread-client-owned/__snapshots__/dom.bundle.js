// tags/frag-host.marko
const $one_content = _content$1("b0", "<em>one</em>");
const $two_content__input_b = /*@__PURE__*/ _closure_get_patch("b2", 11, ($scope) => _text($scope.a, $scope._.e), 0, "b5", 0);
const $two_content = _content$1("b1", "<strong> </strong>", "D ", $two_content__input_b);
const $sectionAttrs__script = _script("b4", ($scope) => _attrs_script($scope, "a"));
const $sectionAttrs = /*@__PURE__*/ _const(9, ($scope) => {
	$sectionAttrs__script($scope);
	_attrs_content($scope, "a", $scope.j);
});
const $divAttrs__script = _script("b3", ($scope) => _attrs_script($scope, "b"));
const $divAttrs = /*@__PURE__*/ _const(10, ($scope) => {
	$divAttrs__script($scope);
	_attrs_partial_content($scope, "b", $scope.k, { id: 1 });
});
const $input_mode__OR__one__OR__two = /*@__PURE__*/ _or_patch("b6", 8, ($scope) => {
	$sectionAttrs($scope, { content: $scope.f ? $scope.g : $scope.h });
	$divAttrs($scope, { content: $scope.f ? $scope.h : $scope.g });
}, 2);
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__one__OR__two);

// template.marko
const $mode = _let(5, ($scope) => $input_mode($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.f);
}));
