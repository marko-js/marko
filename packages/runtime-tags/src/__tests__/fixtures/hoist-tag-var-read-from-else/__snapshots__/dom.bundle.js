// template.marko
const $else_content__label = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $else_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$else_content__label($scope, `${$getLabel_getter($scope._)()}:${[...$getLabel_getter($scope._)].length}`);
}));
const $getLabel_getter = /*@__PURE__*/ _hoist(0, [
	"Aa",
	"Da",
	0
]);
function $getLabel() {
	return "a";
}
_resumed.a0 = $getLabel;
