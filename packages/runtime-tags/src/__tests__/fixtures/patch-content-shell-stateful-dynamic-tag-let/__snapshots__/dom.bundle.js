// template.marko
const $inputonpdiv_content__input_label = /*@__PURE__*/ _fill_join_closure("b6", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "b1"), 0);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("b0", " ", " ", $inputonpdiv_content__input_label));
const $Card_content__input_on__OR__n = /*@__PURE__*/ _fill_join_subscribers("b5", 3, /*@__PURE__*/ _or(4, ($scope) => $Card_content__dynamicTag($scope, $scope._.d ? "p" : "div", ($_) => ({ "data-n": $scope.d }))), 5, 0);
const $Card_content__n = _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$Card_content__input_on__OR__n($scope);
});
const $Card_content__setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$Card_content__n($scope, +$scope.d + 1);
}));
