// template.marko
const $showFoodiv_content = _content("a2", "body");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $Foo_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $Foo_content__open = /*@__PURE__*/ _let(5, ($scope) => $Foo_content__if($scope, $scope.f ? 0 : 1));
const $Foo_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Foo_content__open($scope, true);
}));
