// template.marko
const $await_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $await_content__v = ($scope, v) => _text($scope.b, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em><!>:<!></em>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__input_value = /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__await_promise($scope, $scope._.e));
const $for_content__setup = ($scope) => {
	$for_content__input_value._($scope);
	$await_content($scope);
};
const $for = /*@__PURE__*/ _for_of(1, "<div><!></div>", "D%", $for_content__setup);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, "id"]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.f, { id: "c" }]);
}));
