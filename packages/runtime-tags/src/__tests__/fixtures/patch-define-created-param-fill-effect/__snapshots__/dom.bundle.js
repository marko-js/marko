// template.marko
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__label__script = _script("a1", ($scope) => console.log("effect", $scope.e));
const $Panel_content__label = fill("a2", /*@__PURE__*/ _const(4, ($scope) => {
	$if_content2__label($scope);
	$Panel_content__label__script($scope);
}));
const $if_content__o = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.g)));
const $o = _let(6, $if_content__o);
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$o($scope, !$scope.g);
}));
