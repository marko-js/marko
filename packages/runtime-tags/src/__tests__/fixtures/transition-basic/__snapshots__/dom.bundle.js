// template.marko
_enable_catch();
const $await_content__value = /*@__PURE__*/ _render(($scope, value) => _text($scope.a, value));
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.f)));
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.f));
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	$count__render($scope);
	$count__closure($scope);
});
const $other = /*@__PURE__*/ _let(6, /*@__PURE__*/ _render(($scope) => _text($scope.d, $scope.g)));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.f + 1);
	});
	_on($scope.b, "click", function() {
		$other($scope, $scope.g + 1);
	});
});
