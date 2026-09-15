// template.marko
const $inputonsectionarticle_content__input_label = /*@__PURE__*/ _fill_join_closure("a1", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.f)), 0);
const $inputonsectionarticle_content__setup = ($scope) => {
	$inputonsectionarticle_content__input_label($scope);
	$inputonsectionarticle_content__count($scope);
};
const $inputonsectionarticle_content__count = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.b, $scope._.g));
const $inputonsectionarticle_content = _content_resume("a0", "<!> <!>", "%c%", $inputonsectionarticle_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputonsectionarticle_content);
const $input_on__OR__input_label__OR__count = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.e ? "section" : "article", () => ({
	class: $scope.f,
	"data-count": $scope.g
})), 2)));
const $count__closure = /*@__PURE__*/ _closure($inputonsectionarticle_content__count);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	$input_on__OR__input_label__OR__count($scope);
	$count__closure($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
