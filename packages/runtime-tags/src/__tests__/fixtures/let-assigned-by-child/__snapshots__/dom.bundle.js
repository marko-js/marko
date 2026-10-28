// tags/label.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.e();
}));

// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__input_promise = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__await_promise($scope, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $x = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $onHide = ($scope) => function() {
	$x($scope, "");
};
_resumed.a0 = $onHide;
