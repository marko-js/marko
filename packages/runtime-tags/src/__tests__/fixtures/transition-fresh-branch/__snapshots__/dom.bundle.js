// template.marko
_enable_catch();
const $await_content__value = /*@__PURE__*/ _render(($scope, value) => _text($scope.a, value));
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.f)));
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope._.f)));
const $if_content__setup = $if_content__count;
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.f));
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	$count__render($scope);
	$if_content__count($scope);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if(3, "<span>late: <!></span>", "Db%l", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.f + 1);
	});
	_on($scope.b, "click", function() {
		$show($scope, true);
	});
});
