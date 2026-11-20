// template.marko
const $Rec_content2__label = /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.a, $scope._._.j), ($scope) => $scope._._, "a0");
const $Rec_content2 = _content("a1", "<em>held <!></em>", "Db%", $Rec_content2__label);
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content2__content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.h));
const $if_content2__setup = $if_content2__content;
const $Rec_content__label = /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($Rec_content2__label));
const $Rec_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content2__setup);
const $Rec_content__shown = /*@__PURE__*/ _let(8, ($scope) => {
	$Rec_content__label($scope, $scope.i ? "on" : "off");
	$Rec_content__if($scope, $scope.i ? 0 : 1);
});
const $Rec_content__setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$Rec_content__shown($scope, !$scope.i);
}));
