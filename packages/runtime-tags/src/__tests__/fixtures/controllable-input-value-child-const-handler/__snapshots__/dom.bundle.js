// tags/child.marko
const $setup__script = _script("b0", ($scope) => _attr_input_value_script($scope, "a"));

// template.marko
const $out = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $onChange = ($scope) => (next) => {
	$out($scope, next);
};
_resumed.a0 = $onChange;
