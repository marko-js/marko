// template.marko
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a0", " ", " b", 0, $catch_content__$params);
const $try_content__setup__script = _script("a2", ($scope) => $scope._.a.textContent = "This shouldn't happen");
const $setup__script = _script("a3", ($scope) => $scope.c.textContent = "This is good");
