// card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if(1, "<section><!></section>", "D%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $Card_content__input_label = /*@__PURE__*/ _fill_join_closure("b0", 3, /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d)), 0);
const $Card_content = _content_resume("b0", " ", " ", $Card_content__input_label);
