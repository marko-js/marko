// tags/log-effect.marko
const $input_id__script = _script("b0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");

// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("a2", " ", " ", 0, $catch_content__$params);
const $await_content__setup = _script("a0", ($scope) => document.getElementById("log").textContent += "[r]");
const $placeholder_content = _content("a1", "loading");
