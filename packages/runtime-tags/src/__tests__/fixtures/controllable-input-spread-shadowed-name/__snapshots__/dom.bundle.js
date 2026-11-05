// template.marko
const $value__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	_attrs_content($scope, "a", {
		value: $scope.c,
		valueChange: $valueChange($scope)
	}, _controllable_input);
	_text($scope.b, $scope.c);
	$value__script($scope);
});
const $valueChange = ($scope) => function(v) {
	$value($scope, v);
};
_resumed.a0 = $valueChange;
