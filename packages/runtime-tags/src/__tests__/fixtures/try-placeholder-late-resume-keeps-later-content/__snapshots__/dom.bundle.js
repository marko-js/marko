// template.marko
const $placeholder_content = _content("a1", "loading");
const $await_content2__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f), 0, "a2");
const $await_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.b, $scope._._._.f), ($scope) => $scope._._._, "a0");
const $await_content__setup = $await_content__count;
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<span class=body><!><!></span>", "D%b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($await_content__count, $await_content2__count);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.f + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, false);
	});
});
