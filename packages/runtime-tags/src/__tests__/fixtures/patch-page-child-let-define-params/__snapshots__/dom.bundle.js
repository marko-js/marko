// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _or_resume("b2", 7, ($scope) => "g" in $scope && $dynamicTag($scope, $scope.g, ($_) => ({ label: $scope.f }))));
const $T = /*@__PURE__*/ _let(6, $input_label__OR__T);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));

// template.marko
const $Card_content__label = ($scope, label) => _text($scope.a, label);
const $Card_content__$params = ($scope, $params2) => $Card_content__label($scope, $params2[0].label);
const $Card_content = _content$1("a0", "<em> </em>", "D ", 0, $Card_content__$params);
