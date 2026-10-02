// tags/log-effect.marko
const $input_id__script = _script("b0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");

// template.marko
const $placeholder_content2__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("inner placeholder");
})());
const $placeholder_content2 = _content("a0", " ", " ", $placeholder_content2__setup);
const $placeholder_content = _content("a1", "loading");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__$params);
