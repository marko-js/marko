// template.marko
const $selected = /*@__PURE__*/ _let(3, ($scope) => {
	_attr_select_value($scope, "a", $scope.d, $valueChange($scope));
	_text($scope.b, $scope.d);
});
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$selected($scope, [1]);
	});
});
const $valueChange = ($scope) => function(v) {
	$selected($scope, v.map((it) => Number(it)));
};
_resume("a0", $valueChange);
