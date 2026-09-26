// tags/child.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_value = $await_promise;

// template.marko
const $placeholder_content = _content("a0", "LOADING");
const $try_content__value = /*@__PURE__*/ _closure_get(4, ($scope) => $input_value($scope.a, $scope._.d), 0, "a2");
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value__script = _script("a3", ($scope) => $scope.d.then?.((v) => {
	if (v === "first") $value($scope, resolveAfter("second"));
	if (v === "third") $value($scope, "fourth");
}));
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$value__closure($scope);
	$value__script($scope);
});
const $setup__script = _script("a4", ($scope) => {
	_on($scope.a, "click", function() {
		$value($scope, resolveAfter("first"));
	});
	_on($scope.b, "click", function() {
		$value($scope, resolveAfter("third"));
	});
});
