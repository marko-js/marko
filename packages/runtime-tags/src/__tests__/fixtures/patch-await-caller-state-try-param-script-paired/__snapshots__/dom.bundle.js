// tags/show-await.marko
const $catch_content = _content$1("b2", "failed");
const $try_content__input_label__script = _script_patch("b0 >>e", ($scope) => document.title = $scope._._.e);
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
