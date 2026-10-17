// template.marko
const $if_content2__label = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.b), ($scope) => $scope._._, "a10");
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $if_content__count__OR__label = /*@__PURE__*/ _or(1, ($scope) => $if_content__if($scope, $scope._._.f > 0 && $scope._.b ? 0 : 1));
const $if_content__count = _resumed.a8 = /*@__PURE__*/ _closure_get(7, $if_content__count__OR__label, ($scope) => $scope._._, "a11");
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$if_content__label._($scope);
};
const $if_content__label = _resumed.a9 = /*@__PURE__*/ _if_closure(0, 0, $if_content__count__OR__label);
const $wrapper_content__label__closure = /*@__PURE__*/ _closure($if_content2__label);
const $wrapper_content__label = /*@__PURE__*/ _const(1, ($scope) => {
	$if_content__label($scope);
	$wrapper_content__label__closure($scope);
});
const $wrapper_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $wrapper_content__input_label = _closure_resume("a2", /*@__PURE__*/ _fill_join_closure("a4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => {
	$wrapper_content__label($scope, $scope._.e);
	$wrapper_content__if($scope, $scope._.e ? 0 : 1);
}), 0));
const $count = /*@__PURE__*/ _fill_let("a5", 5, /* @__PURE__ */ _closure($if_content__count));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
