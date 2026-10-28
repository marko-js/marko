// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_signal("4 b1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputonCarddiv_content__x = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a4", 2, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.c), 0, "a2"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__x);
_content_resume($inputonCarddiv_content);
const $if_content__x__script = _script("a3", ($scope) => $scope.a.textContent = $scope.c);
