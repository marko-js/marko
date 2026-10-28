// template.marko
const $for_content__cm__OR__it_v = /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _or_resume("a3", 5, ($scope) => _attr_input_value($scope, "a", $scope.e + $scope._.j, $valueChange($scope))));
const $for_content__cm = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _for_closure(2, $for_content__cm__OR__it_v));
const $for_content__cv = _let(6, ($scope) => _text($scope.b, $scope.g));
const $for_content__setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
const $cm = /*@__PURE__*/ _const(9, $for_content__cm);
const $input_a__OR__s = /*@__PURE__*/ _fill_join("a6", 5, /*@__PURE__*/ _or(8, ($scope) => $cm($scope, `${$scope.f}:${$scope.h}`)));
const $s = _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_a__OR__s($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.h + 1);
}));
const $valueChange = ($scope) => function(v) {
	$for_content__cv($scope, v);
};
_resumed.a0 = $valueChange;
