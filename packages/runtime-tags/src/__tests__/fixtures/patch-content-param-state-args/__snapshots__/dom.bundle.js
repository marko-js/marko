// tags/wrapper.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content__OR__n = /*@__PURE__*/ _or_patch("c1", 6, ($scope) => $dynamicTag($scope, $scope.e, ($_) => ({ value: $scope.f })));
const $n = /*@__PURE__*/ _fill_let("c2", 5, $input_content__OR__n);
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));

// template.marko
const $wrapper_content__input_suffix = /*@__PURE__*/ _closure_get_patch("a0", 4, ($scope) => _text($scope.b, $scope._.d), 0, "a2", 0);
const $wrapper_content__setup = $wrapper_content__input_suffix;
const $wrapper_content__$params = ($scope, $params2) => _text($scope.a, $params2[0].value);
const $wrapper_content = _content("a1", "<p> </p><em> </em>", "D lD ", $wrapper_content__setup, $wrapper_content__$params);
