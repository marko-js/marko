// tags/child.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $child_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $child_content__input_content = /*@__PURE__*/ _closure_get(4, ($scope) => $child_content__dynamicTag($scope, $scope._.d), 0, "a0", 3);
const $child_content = _content_resume("a1", "<!><!><!>", "b%", $child_content__input_content);
const $Box_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a3", 3);
const $Box_content = _content_resume("a4", "label: <!>", "b%", $Box_content__input_label);
