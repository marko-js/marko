// template.marko
const $if_content3__label = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $if_content3__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$if_content3__label($scope, String($if_content__getLabel_getter($scope._)()));
}));
const $if_content__getLabel_getter = /*@__PURE__*/ _hoist(0, "Aa");
function $getLabel() {
	return "a";
}
_resumed.a0 = $getLabel;
