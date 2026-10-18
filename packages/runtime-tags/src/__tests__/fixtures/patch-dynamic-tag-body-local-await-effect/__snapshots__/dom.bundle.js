// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputonCarddiv_content__x = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._, "a4");
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__x($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _fill_join_closure("a6", 2, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.b, $scope._.c), 0, "a5"), 0);
const $inputonCarddiv_content = _content$1("a0", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__x__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__x);
const $if_content__x__script = _script("a9", ($scope) => $scope.a.textContent = $scope.c);
const $if_content__x = fill("a7", /*@__PURE__*/ _const(2, ($scope) => {
	$if_content__x__closure($scope);
	$if_content__x__script($scope);
}));
