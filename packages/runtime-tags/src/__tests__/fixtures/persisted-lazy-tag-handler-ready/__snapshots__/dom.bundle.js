// child.marko
const $input_title__OR__handler__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.d;
_resume("a0", $handler);
