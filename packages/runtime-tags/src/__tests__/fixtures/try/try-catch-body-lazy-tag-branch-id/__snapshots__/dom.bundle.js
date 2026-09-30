// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b0", " ", " ", 0, $catch_content__$params);

// child.marko
const $setup__script = _script("a0", ($scope) => console.log("child"));
