// template.marko
const $if_content__input_a = /*@__PURE__*/ _fill_signal("5 a2", /*@__PURE__*/ _if_closure(2, 0, /* @__PURE__ */ _fill_global_join("a0", ($scope) => _text($scope.a, $scope._.f + $scope.$.g), "g")));
const $if = /*@__PURE__*/ _if(2, "<p>t:<!></p>", "Db%", $if_content__input_a);
const $s = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g % 2 === 1 ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.g + 1);
}));
