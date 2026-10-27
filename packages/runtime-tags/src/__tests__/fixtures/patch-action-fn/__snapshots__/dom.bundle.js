// template.marko
const $act2__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.f));
const $act2 = fill("a4", _action(5, "a1", $act2__script));
const $act = ($scope) => () => {
	document.title = String($scope.e);
};
_bind_resume("a0 e", $act);
