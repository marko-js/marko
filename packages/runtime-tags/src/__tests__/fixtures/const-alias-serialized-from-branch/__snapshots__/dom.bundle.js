// template.marko
const $if_content__a__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	document.body.dataset.a = String($scope._.d);
}));
const $if_content__a = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_text($scope.b, $scope._.d);
	$if_content__a__script($scope);
});
const $if = /*@__PURE__*/ _if(0, "<button class=read> </button>", " D ", $if_content__a);
const $obj = /*@__PURE__*/ _let(2, ($scope) => {
	$a($scope, $scope.c?.a);
	$if($scope, $scope.c ? 0 : 1);
});
const $a = /*@__PURE__*/ _const(3, $if_content__a);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$obj($scope, { a: 1 });
}));
