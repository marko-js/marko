// template.marko
const $for_content__act = /*@__PURE__*/ _action(6, ($scope) => $for_content__act_pending($scope, $scope.g.pending));
const $for_content__act_pending = /*@__PURE__*/ _const(7, ($scope) => _text($scope.c, $scope.h ? "pending" : "idle"));
const $for_content__setup = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g();
}));
const $act = ($scope) => /*@__PURE__*/ _act(function* () {
	yield resolveAfter($scope.f);
}, 1, $scope, $for_content__act);
_resumed.a0 = $act;
