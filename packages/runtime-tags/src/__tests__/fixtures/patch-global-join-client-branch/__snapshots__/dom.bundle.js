// template.marko
const $if_content__input_a__OR__$global_g = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.f + $scope.$.g));
const $if_content__input_a = /*@__PURE__*/ _if_closure_patch("a3", 2, 0, $if_content__input_a__OR__$global_g);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__$global_g._($scope);
};
const $if_content__$global_g = /*@__PURE__*/ _if_closure_patch("a5", 2, 0, $if_content__input_a__OR__$global_g);
const $if = /*@__PURE__*/ _if(2, "<p>t:<!></p>", "Db%", $if_content__setup);
const $s = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g % 2 === 1 ? 0 : 1);
});
const $global_g = _fill_global("a1", $if_content__$global_g, "g");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.g + 1);
}));
