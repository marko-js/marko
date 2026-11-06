// template.marko
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content("a1", " ", " ", 0, $catch_content__$params);
const $try_content__setup__script = _script("a0", ($scope) => $scope._.a.textContent = "This shouldn't happen");
const $setup__script = _script("a2", ($scope) => $scope.c.textContent = "This is good");
