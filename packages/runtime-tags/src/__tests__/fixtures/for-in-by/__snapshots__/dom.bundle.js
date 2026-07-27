// template.marko
const $for_content__key = ($scope, key) => _text($scope.a, key);
const $for_content__value = ($scope, value) => _text($scope.b, value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__key($scope, $params2[0]);
	$for_content__value($scope, $params2[1]);
};
const $for = /*@__PURE__*/ _for_in(0, "<p><!>:<!></p>", "D%c%", 0, $for_content__$params);
const $entries = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, (key) => key]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$entries($scope, {
		b: 2,
		c: 3
	});
}));
