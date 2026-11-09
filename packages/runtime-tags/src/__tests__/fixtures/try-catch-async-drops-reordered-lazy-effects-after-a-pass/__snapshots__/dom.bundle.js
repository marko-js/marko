// child.marko
const $placeholder_content = _content("a0", "loading");
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content("a1", " ", " ", 0, $catch_content__$params);

// tags/log-effect.marko
const $input_id__script = _script("c0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");
