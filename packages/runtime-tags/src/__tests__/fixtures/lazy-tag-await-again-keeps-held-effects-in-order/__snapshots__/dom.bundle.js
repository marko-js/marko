// tags/log-effect.marko
const $input_id__script = _script("c0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");

// child.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a0", " ", " ", 0, $catch_content__$params);
