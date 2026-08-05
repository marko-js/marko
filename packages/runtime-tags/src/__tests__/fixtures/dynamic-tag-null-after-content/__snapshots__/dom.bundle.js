// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__x = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d > 9 ? "div" : null));
const $if = /*@__PURE__*/ _if(2, "<b>outer</b><!><!>", "b%", $if_content__x);
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$if($scope, $scope.d % 2 === 0 ? 0 : 1);
	$if_content__x($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.d + 1);
}));
