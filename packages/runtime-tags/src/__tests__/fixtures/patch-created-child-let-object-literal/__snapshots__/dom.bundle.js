// tags/card.marko
const $o = fill("b0", _let(4, ($scope) => $o_label($scope, $scope.e?.label)));
const $o_label = /*@__PURE__*/ _const(5, ($scope) => {
	_return($scope, $scope.f + "!");
	_text($scope.a, $scope.f);
});

// template.marko
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	console.log($scope.e);
}));
const $if_content__v = _var_resume("a0", /*@__PURE__*/ _const(4, ($scope) => _text($scope.c, $scope.e)));
