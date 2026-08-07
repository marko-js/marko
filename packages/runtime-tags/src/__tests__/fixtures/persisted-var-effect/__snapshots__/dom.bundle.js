// template.marko
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $label = _var_resume("a0", /*@__PURE__*/ _const(8, _script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + $scope.i;
	}
})));
