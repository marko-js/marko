// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $Box_content2__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $Box_content2__open = /*@__PURE__*/ _let(5, ($scope) => $Box_content2__if($scope, $scope.f ? 0 : 1));
const $Box_content2__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Box_content2__open($scope, !$scope.f);
}));
const $Box_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d));
const $Box_content = _content_resume("a2", "label: <!>", "b%", $Box_content__input_label);
