// template.marko
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content2__input_content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.e));
const $if_content2__setup = $if_content2__input_content;
const $Rec_content2__label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._._._.d), ($scope) => $scope._._._, "a0");
const $Rec_content2 = _content("a1", "<em>held <!></em>", "Db%", $Rec_content2__label);
const $Rec_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__setup);
const $Rec_content__shown = /*@__PURE__*/ _closure_get(4, ($scope) => $Rec_content__if($scope, $scope._.c ? 0 : 1), 0, "a3");
const $label = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($Rec_content2__label));
const $shown__closure = /*@__PURE__*/ _closure($Rec_content__shown);
const $shown = /*@__PURE__*/ _let(2, ($scope) => {
	$label($scope, $scope.c ? "on" : "off");
	$shown__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, !$scope.c);
}));
