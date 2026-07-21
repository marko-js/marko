// template.marko
_enable_catch();
const $await_content__value = /*@__PURE__*/ _render(($scope, value) => _text($scope.a, value));
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
const $await_content = /*@__PURE__*/ _await_content(0, "resolved: <!>", "b%b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._._.e)), ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$await_content($scope);
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.e));
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$count__render($scope);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%c", $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.e + 1);
	});
	_on($scope.b, "click", function() {
		$show($scope, false);
	});
});
