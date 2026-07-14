// tags/panel.marko
const $section_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.c));
const $section_content = _content_resume("b0", "<span> </span>", "D l", $section_content__input_label);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(4);
const $idx__OR__a__OR__b = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, ($scope.g ? $scope.i : $scope.h).section), 2);
const $idx = /*@__PURE__*/ _let(6, $idx__OR__a__OR__b);
const $setup__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$idx($scope, 1 - $scope.g);
}));
const $a = _var_resume("a1", /*@__PURE__*/ _const(7, $idx__OR__a__OR__b));
const $b = _var_resume("a2", /*@__PURE__*/ _const(8, $idx__OR__a__OR__b));
