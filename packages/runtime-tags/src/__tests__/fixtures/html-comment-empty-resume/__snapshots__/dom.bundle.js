// template.marko
const $c = /*@__PURE__*/ _let(2, ($scope) => _text($scope.a, `${_to_text($scope.c)}`));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$c($scope, "secret");
}));
