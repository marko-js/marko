// tags/log-effect.marko
const $setup__script = _script("b0", ($scope) => document.getElementById("log").textContent = "caught body effect ran");

// template.marko
const $catch_content2__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content2 = _content("a0", " ", " ", 0, $catch_content2__err);
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", " ", " ", 0, $catch_content__err);
