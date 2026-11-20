// template.marko
const $Inner_content2__label = /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.a, $scope._._.j), ($scope) => $scope._._, "a1");
const $Inner_content2 = _content("a2", "<em>held <!></em>", "Db%", $Inner_content2__label);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.h));
const $if_content__setup = $if_content__input_content;
const $Outer_content__label = /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($Inner_content2__label));
const $Outer_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__setup);
const $Outer_content__shown = /*@__PURE__*/ _let(8, ($scope) => {
	$Outer_content__label($scope, $scope.i ? "on" : "off");
	$Outer_content__if($scope, $scope.i ? 0 : 1);
});
const $Outer_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$Outer_content__shown($scope, !$scope.i);
}));
