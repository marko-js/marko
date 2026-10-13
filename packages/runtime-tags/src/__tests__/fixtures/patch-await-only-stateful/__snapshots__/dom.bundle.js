// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, Promise.resolve("loaded"));
};
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
