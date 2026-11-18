// tags/log-effect.marko
const $input_id__script = _script("c0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");
const $input_id = /*@__PURE__*/ _const(2, $input_id__script);

// template.marko
const $placeholder_content__setup = ($scope) => $input_id($scope.a, "placeholder");
const $placeholder_content = _content("b0", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""), $placeholder_content__setup);
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b1", " ", " ", 0, $catch_content__err);

// child.marko
const $setup__script = _script("a0", ($scope) => document.getElementById("log").textContent += "[lazy]");
