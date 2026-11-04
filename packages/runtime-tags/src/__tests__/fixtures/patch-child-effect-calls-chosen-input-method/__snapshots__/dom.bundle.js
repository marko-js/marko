// tags/label.marko
const $input__script = _script_patch("b0 b", ($scope) => console.log("run", $scope.b.get()));

// template.marko
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_bind_resume("a0 d", $up);
_bind_resume("a1 d", $low);
