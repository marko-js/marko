// tags/show-await.marko
const $await_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	_style_rule_item($scope.a, "--M_b0", $scope.d);
	_text($scope.b, $scope.d);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g)));
const $p = _let(6, $if_content__p);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("green"));
}));
