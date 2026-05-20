// total: 5604 (min) 2577 (brotli)
// template.marko: 230 (min) 138 (brotli)
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content__err = ($scope, err) => $catch_content__err_message($scope, err?.message);
const $catch_content = _content_resume("a0", " ", " b", 0, $catch_content__$params);
const $try_content__setup__script = _script("a2", ($scope) => $scope._.a.textContent = "This shouldn't happen");
const $setup__script = _script("a3", ($scope) => $scope.c.textContent = "This is good");
