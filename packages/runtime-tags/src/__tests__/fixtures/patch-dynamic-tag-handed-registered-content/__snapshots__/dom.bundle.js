// template.marko
const $B_content__$params = ($scope, $params3) => _text($scope.a, $params3[0].label);
const $B_content = _content$1("a2", "<b> </b>", "D ", 0, $B_content__$params);
const $if_content__label = /*@__PURE__*/ _if_closure_patch("a5", 0, 0, ($scope) => _text($scope.a, $scope._.d));
const $A_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $A_content__label = /*@__PURE__*/ _const(3, ($scope) => {
	$A_content__if($scope, $scope.d === "two" ? 0 : 1);
	$if_content__label($scope);
});
const $A_content__$params = ($scope, $params2) => $A_content__label($scope, $params2[0].label);
const $A_content = _content$1("a1", "<!><!><!>", "b%", 0, $A_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $A__OR__B__OR__open = /*@__PURE__*/ _or(11, ($scope) => $dynamicTag($scope, $scope.k ? $scope.h : $scope.i, ($_) => ({ label: "local" })), 2);
const $open = _let(10, $A__OR__B__OR__open);
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.k);
}));
