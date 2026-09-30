// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content__if = /*@__PURE__*/ _if(1, "never");
const $if_content__x = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__if($scope, $scope._.d > 9 ? 0 : 1));
const $await_content = /*@__PURE__*/ _await_content(0, "<i> </i>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__x._($scope);
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter("A", 1));
};
const $if = /*@__PURE__*/ _if(2, "<b>before</b><!><!><!>", "b%b%", $if_content__setup);
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$if($scope, $scope.d % 2 === 0 ? 0 : 1);
	$if_content__x($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.d + 1);
}));
