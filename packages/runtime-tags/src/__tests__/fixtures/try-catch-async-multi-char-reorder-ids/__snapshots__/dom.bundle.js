// template.marko
const $await_content__clicks = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$await_content__clicks($scope, +$scope.f + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__clicks($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content__$params = ($scope, $params4) => _text($scope.b, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<button><!> <!></button>", " D%c%", $await_content__setup);
const $catch_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $catch_content__setup = $await_content;
const $catch_content__$params = ($scope, $params3) => $catch_content__await_promise($scope, resolveAfter($params3[0]?.message, 2));
const $catch_content = _content("a1", "<!><!><!>", "b%", $catch_content__setup, $catch_content__$params);
