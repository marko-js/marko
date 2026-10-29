// tags/outer.marko
const $catch_content = _content$1("b1", "error");
const $await_content = /*@__PURE__*/ _await_content(0, "done");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $try_content__input_promise = /*@__PURE__*/ _fill_join_closure("b4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $try_content__await_promise($scope, $scope._._.e), ($scope) => $scope._._, "b0"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $for_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup);
const $rows = /*@__PURE__*/ _fill_let("b5", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
