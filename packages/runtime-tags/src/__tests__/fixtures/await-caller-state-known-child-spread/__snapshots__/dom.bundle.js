// tags/brand.marko
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// tags/show-await.marko
const $await_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	const $brand_input_spread = { label: $scope.c };
	$input_label($scope.a, $brand_input_spread.label);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(5, ($scope) => $input_promise($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
