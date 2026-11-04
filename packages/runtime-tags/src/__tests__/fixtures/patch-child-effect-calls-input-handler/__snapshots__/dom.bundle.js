// tags/label.marko
const $input_onRead__script = _script_patch("b0 c", ($scope) => console.log("run", $scope.c()));

// template.marko
const $read = ($scope) => () => $scope.d;
_bind_resume("a0 d", $read);
