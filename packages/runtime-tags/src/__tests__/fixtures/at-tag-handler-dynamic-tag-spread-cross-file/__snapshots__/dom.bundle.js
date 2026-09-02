// tags/child.marko
_resume_dynamic_tag();
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_tag__OR__input_button = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.d, () => $scope.e));
const $input_button = /*@__PURE__*/ _const(4, $input_tag__OR__input_button);

// template.marko
const $button_content__count = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.a, $scope._.b));
const $button_content = /*@__PURE__*/ _content("a1", " ", " ", $button_content__count);
const $count__closure = /*@__PURE__*/ _closure($button_content__count);
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$input_button($scope.a, attrTag({
		onClick: $onClick($scope),
		content: $button_content($scope)
	}));
	$count__closure($scope);
});
const $onClick = ($scope) => function() {
	$count($scope, +$scope.b + 1);
};
_resume("a0", $onClick);
