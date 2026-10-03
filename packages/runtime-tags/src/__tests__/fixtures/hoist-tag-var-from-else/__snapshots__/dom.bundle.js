// template.marko
const $getLabel_getter = _hoist_resume("a1", 0, [
	"Ab",
	"Db",
	1
]);
const $else_content__getLabel = /*@__PURE__*/ _const(0);
const $else_content__setup = ($scope) => $else_content__getLabel($scope, $getLabel);
const $if = /*@__PURE__*/ _if(1, "<span>a</span>", 0, 0, 0, 0, $else_content__setup);
const $a = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $label = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$a($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$label($scope, `${$getLabel_getter($scope)()}:${[...$getLabel_getter($scope)].length}`);
	});
});
function $getLabel() {
	return "b";
}
_resumed.a0 = $getLabel;
