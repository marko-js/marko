// child.marko
const $attrs__script = _script_patch("a1 d", ($scope) => _attrs_script($scope, "a"));
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.d;
_bind_resume("a0 d", $handler);
