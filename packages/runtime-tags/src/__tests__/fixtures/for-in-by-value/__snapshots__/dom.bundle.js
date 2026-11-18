// template.marko
const $for_content__$params = ($scope, key, value) => {
	_text($scope.a, key);
	_text($scope.b, value);
};
const $for = /*@__PURE__*/ _for_in(1, "<li><!>=<!></li>", "D%c%", 0, $for_content__$params);
const $entries = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, (_key, value) => value]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$entries($scope, {
		b: 2,
		a: 3,
		c: 1
	});
}));
