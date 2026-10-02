// tags/log-effect.marko
const $setup__script = _script("b0", ($scope) => document.getElementById("log").textContent = "caught body effect ran");

// template.marko
const $catch_content2__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content("a0", " ", " ", 0, $catch_content2__$params);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a1", " ", " ", 0, $catch_content__$params);
