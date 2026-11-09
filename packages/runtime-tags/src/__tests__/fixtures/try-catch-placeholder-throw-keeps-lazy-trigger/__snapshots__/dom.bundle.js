// template.marko
const $placeholder_content__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("P");
})());
const $placeholder_content = _content("b0", " ", " ", $placeholder_content__setup);
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content("b1", "caught <!>", "b%", 0, $catch_content__$params);

// child.marko
const $setup__script = _script("a0", ($scope) => console.log("loaded"));
