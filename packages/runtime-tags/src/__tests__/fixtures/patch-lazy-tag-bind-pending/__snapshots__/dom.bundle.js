// child.marko
const $handler2__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.e));
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.d;
_bind_resume("a0 d", $handler);
