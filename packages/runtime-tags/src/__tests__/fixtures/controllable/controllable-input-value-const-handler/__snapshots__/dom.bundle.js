// template.marko
const $out = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
const $onChange = ($scope) => (next) => {
	$out($scope, next);
};
_resumed.a0 = $onChange;
