// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b0", "caught <!>", "b%", 0, $catch_content__err);

// tags/log-effect.marko
const $input_id__script = _script("c0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");
