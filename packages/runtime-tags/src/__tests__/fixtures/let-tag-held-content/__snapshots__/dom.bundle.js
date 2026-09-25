// tags/my-tag.marko
const $startContent_content = _content("b0", "default");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_as__OR__input_class__OR__htmlInput__OR__content = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.d || "div", () => ({
	...$scope.g,
	class: ["foo", $scope.e],
	content: $scope.i
})), 3);
const $content = /*@__PURE__*/ _let(8, $input_as__OR__input_class__OR__htmlInput__OR__content);
const $inputAs = /*@__PURE__*/ _const(3, $input_as__OR__input_class__OR__htmlInput__OR__content);
const $inputContent__script = _script("b1", ($scope) => $content($scope, $scope.f));

// template.marko
const $mytag_content = _content("a0", "Div");
const $as = /*@__PURE__*/ _let(2, ($scope) => $inputAs($scope.a, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$as($scope, "span");
}));
