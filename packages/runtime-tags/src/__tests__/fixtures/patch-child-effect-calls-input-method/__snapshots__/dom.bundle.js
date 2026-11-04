// tags/label.marko
const $input__script = _script("b0", ($scope) => console.log("run", $scope.b.get()));

// template.marko
const $getTitle = ($scope) => () => $scope.d;
_bind_resume("a0 d", $getTitle);
