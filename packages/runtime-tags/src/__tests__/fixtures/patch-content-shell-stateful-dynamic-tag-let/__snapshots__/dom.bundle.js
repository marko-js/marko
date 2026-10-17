// template.marko
const $inputonpdiv_content__input_label = /*@__PURE__*/ _fill_join_closure("b5", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._), 0);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("b1", " ", " ", $inputonpdiv_content__input_label));
const $Card_content__input_on__OR__n = /*@__PURE__*/ _fill_join_subscribers("b4", 3, /*@__PURE__*/ _shell_or("b8", 4, ($scope) => $Card_content__dynamicTag($scope, $scope._.d ? "p" : "div", ($_) => ({ "data-n": $scope.d }))), 5, 0);
const $Card_content__input_on = _closure_resume("b7", /*@__PURE__*/ _closure_get(5, $Card_content__input_on__OR__n));
const $Card_content__n = /*@__PURE__*/ _fill_let("b3", 3, ($scope) => {
	_text($scope.c, $scope.d);
	$Card_content__input_on__OR__n($scope);
});
const $Card_content__setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$Card_content__n($scope, +$scope.d + 1);
}));
