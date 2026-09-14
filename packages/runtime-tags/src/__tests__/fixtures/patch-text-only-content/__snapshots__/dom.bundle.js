// template.marko
const $input_title__OR__x = /*@__PURE__*/ _fill_join("a0", 7, /*@__PURE__*/ _or(10, ($scope) => _text_content($scope.a, `window.log = [${_to_text($scope.j)}, "${_to_text($scope.h)}"]`)));
const $x = /*@__PURE__*/ _let(9, $input_title__OR__x);
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$x($scope, +$scope.j + 1);
}));
