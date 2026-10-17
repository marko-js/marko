// template.marko
const $if_content2__label = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.b), ($scope) => $scope._._);
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $if_content__count__OR__label = /*@__PURE__*/ _shell_or("a9", 1, ($scope) => $if_content__if($scope, $scope._._.f > 0 && $scope._.b ? 0 : 1));
const $if_content__count = /*@__PURE__*/ _shell_init("a8", /*@__PURE__*/ _closure_get(7, $if_content__count__OR__label, ($scope) => $scope._._));
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, $if_content__count__OR__label);
const $wrapper_content__label__closure = /*@__PURE__*/ _closure($if_content2__label);
const $wrapper_content__label = /*@__PURE__*/ _const(1, ($scope) => {
	$if_content__label($scope);
	$wrapper_content__label__closure($scope);
});
const $wrapper_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $wrapper_content__input_label = _closure_resume("a6", /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => {
	$wrapper_content__label($scope, $scope._.e);
	$wrapper_content__if($scope, $scope._.e ? 0 : 1);
}), 0));
const $count = /*@__PURE__*/ _fill_let("a4", 5, /* @__PURE__ */ _closure($if_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
