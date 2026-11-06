// template.marko
const $placeholder_content2 = _content("a0", "inner loading");
const $await_content__setup__script = _script("a1", ($scope) => console.log("caught body effect"));
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("a3", "loading");
