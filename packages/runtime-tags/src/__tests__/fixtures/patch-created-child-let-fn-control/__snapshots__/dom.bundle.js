// tags/outer.marko
const $input_label__OR__f = /*@__PURE__*/ _fill_join("b1", 6, /*@__PURE__*/ _or(8, ($scope) => {
	_attr_input_value_default($scope, "b", $scope.h($scope.g));
	_attr_input_value_default($scope, "c", $scope.h($scope.g));
}));
const $f = /*@__PURE__*/ _fill_let("b2", 7, $input_label__OR__f);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, (v) => "p-" + v);
}));

// template.marko
function $wrap(v) {
	return "w-" + v;
}
_resumed.a0 = $wrap;
