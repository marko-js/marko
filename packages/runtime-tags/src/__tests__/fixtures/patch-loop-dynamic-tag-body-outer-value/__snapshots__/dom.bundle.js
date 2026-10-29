// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputwrapCarddiv_content__input_suffix = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a9", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._, "a2"), 0));
const $inputwrapCarddiv_content__setup = ($scope) => {
	$inputwrapCarddiv_content__input_suffix($scope);
	$inputwrapCarddiv_content__row_label($scope);
};
const $inputwrapCarddiv_content__row_label = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _fill_closure("a5", 3, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.d), 0, "a4"), 0));
const $inputwrapCarddiv_content = _content$1("a0", "<b><!><!></b>", "D%b%", $inputwrapCarddiv_content__setup);
_content_resume($inputwrapCarddiv_content);
