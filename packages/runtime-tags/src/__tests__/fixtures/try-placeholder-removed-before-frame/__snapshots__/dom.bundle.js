// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("a0", "LOADING");
const $await_content = /*@__PURE__*/ _await_content(0, "value <!>", "b%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__await_promise($scope, $scope._.c ? resolveAfter($scope._.c) : 0), 0, "a2");
const $try_content__setup = ($scope) => {
	$try_content__n($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try(1, "<!><!><!>", "b%", $try_content__setup);
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	let $placeholder;
	if ($scope.c !== 2) $placeholder = attrTag({ content: $placeholder_content($scope) });
	$try($scope, { placeholder: $placeholder });
	$n__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
