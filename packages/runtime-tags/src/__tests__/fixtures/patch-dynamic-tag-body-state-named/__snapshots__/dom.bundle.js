// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_content__OR__open = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.f && $scope.e)));
const $open = /*@__PURE__*/ _fill_let("b2", 5, $input_content__OR__open);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a1"), 0);
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
