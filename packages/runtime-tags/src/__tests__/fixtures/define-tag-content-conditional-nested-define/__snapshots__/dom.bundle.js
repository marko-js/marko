// template.marko
const $Inner_content2__outer_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d));
const $Inner_content2__setup = ($scope) => {
	$Inner_content2__outer_label($scope);
	$Inner_content2__outer_content($scope);
};
const $Inner_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $Inner_content2__outer_content = /*@__PURE__*/ _closure_get(6, ($scope) => $Inner_content2__dynamicTag($scope, $scope._.e));
const $Inner_content2 = _content_resume("a2", "outer <!>: <!><!>", "b%c%", $Inner_content2__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if_content__setup = $if_content__input_content;
const $Inner_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $Inner_content__open = /*@__PURE__*/ _let(5, ($scope) => $Inner_content__if($scope, $scope.f ? 0 : 1));
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Inner_content__open($scope, !$scope.f);
}));
const $Outer_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d));
const $Outer_content = _content_resume("a4", "label: <!>", "b%", $Outer_content__input_label);
