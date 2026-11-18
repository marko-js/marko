// tags/log-effect.marko
const $input_id__script = _script("b0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");

// template.marko
const $placeholder_content2__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("inner placeholder");
})());
const $placeholder_content2 = _content("a0", " ", " ", $placeholder_content2__setup);
const $placeholder_content = _content("a1", "loading");
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__err);
