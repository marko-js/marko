// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b0", " ", " ", 0, $catch_content__err);

// child.marko
const $setup__script = _script("a0", ($scope) => document.getElementById("log").textContent += "[lazy effect ran]");
