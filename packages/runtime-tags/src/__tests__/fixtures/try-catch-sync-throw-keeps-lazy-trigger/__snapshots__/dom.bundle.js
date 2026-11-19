// template.marko
const $catch_content__$params = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b0", "caught <!>", "b%", 0, $catch_content__$params);

// child.marko
const $setup__script = _script("a0", ($scope) => console.log("loaded"));
