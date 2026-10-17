// template.marko
const $if_content__shout = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.c));
const $wrapper_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__shout);
const $wrapper_content__count__OR__shout = /*@__PURE__*/ _or(3, ($scope) => $wrapper_content__if($scope, $scope._.f > 0 && $scope.c ? 0 : 1));
const $wrapper_content__shout = /*@__PURE__*/ _const(2, ($scope) => {
	$wrapper_content__count__OR__shout($scope);
	$if_content__shout($scope);
});
const $wrapper_content__label = ($scope, label) => $wrapper_content__shout($scope, label + "!");
const $wrapper_content__input_label = _closure_resume("a1", /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $wrapper_content__label($scope, $scope._.e)), 0));
const $wrapper_content__count = _resumed.a6 = /*@__PURE__*/ _closure_get(7, $wrapper_content__count__OR__shout, 0, "a8");
const $count = /*@__PURE__*/ _fill_let("a4", 5, /* @__PURE__ */ _closure($wrapper_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
