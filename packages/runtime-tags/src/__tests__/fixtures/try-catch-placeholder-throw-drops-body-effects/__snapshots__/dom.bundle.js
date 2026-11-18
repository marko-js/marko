// tags/log-effect.marko
const $input_id__script = _script("b0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");
const $input_id = /*@__PURE__*/ _const(2, $input_id__script);

// template.marko
const $placeholder_content__setup = ($scope) => $input_id($scope.a, (() => {
	throw new Error("P");
})());
const $placeholder_content = _content("a0", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""), $placeholder_content__setup);
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", "caught <!>", "b%", 0, $catch_content__err);
