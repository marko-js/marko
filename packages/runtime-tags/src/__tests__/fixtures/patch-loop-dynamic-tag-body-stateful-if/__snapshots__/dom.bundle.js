// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<section><!></section>", "D%", $if_content__input_content);
const $show = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));

// template.marko
const $inputwrapCarddiv_content__row_label = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.d), 0, "a2");
const $inputwrapCarddiv_content = _content$1("a0", "<b> </b>", "D ", $inputwrapCarddiv_content__row_label);
_content_resume($inputwrapCarddiv_content);
