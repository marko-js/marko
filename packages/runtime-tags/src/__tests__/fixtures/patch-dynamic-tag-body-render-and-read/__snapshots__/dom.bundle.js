// tags/card.marko
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.f ? "has" : "none")));
const $if = /*@__PURE__*/ _if(2, "<span> </span>", "D ", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a1"), 0);
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
