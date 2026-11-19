// tags/log-effect.marko
const $input_id__script = _script("b0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");

// template.marko
const $catch_content__$params = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", " ", " ", 0, $catch_content__$params);
const $placeholder_content = _content("a0", "loading");
