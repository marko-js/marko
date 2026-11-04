// template.marko
const $showFoodiv_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e));
const $showFoodiv_content = _content("a2", "count <!>", "b%", $showFoodiv_content__count);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("a5", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $Foo_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $Foo_content__open = _let(5, ($scope) => $Foo_content__if($scope, $scope.f ? 0 : 1));
const $Foo_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Foo_content__open($scope, true);
}));
const $Foo_content__setup = ($scope) => {
	$Foo_content__open($scope, false);
	$Foo_content__setup__script($scope);
};
const $Foo_content__$params = ($scope, $params2) => $Foo_content__input_content($scope, $params2[0]?.content);
const $Foo_content__input_content = /*@__PURE__*/ _const(4, $if_content__input_content);
const $Foo_content = _content("a0", "<button id=open>open</button><!><!>", " b%", $Foo_content__setup, $Foo_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $showFoodiv_content);
const $show__OR__Foo = /*@__PURE__*/ _or(3, ($scope) => $dynamicTag($scope, $scope.b ? $scope.c : "div"));
const $show = _let(1, $show__OR__Foo);
const $count = _let(4, /* @__PURE__ */ _closure($showFoodiv_content__count));
