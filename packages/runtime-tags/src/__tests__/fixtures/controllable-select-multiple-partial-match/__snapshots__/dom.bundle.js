// template.marko
const $picked = /*@__PURE__*/ _let(1, ($scope) => _attr_select_value($scope, "a", $scope.b, $valueChange($scope)));
const $setup__script = _script("a1", ($scope) => _attr_select_value_script($scope, "a"));
const $valueChange = ($scope) => (_new_picked) => {
	$picked($scope, _new_picked);
};
_resumed.a0 = $valueChange;
