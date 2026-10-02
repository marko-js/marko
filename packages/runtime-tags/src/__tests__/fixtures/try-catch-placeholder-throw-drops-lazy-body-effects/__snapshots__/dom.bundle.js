// template.marko
const $placeholder_content__setup = ($scope) => $input_id($scope.a, (() => {
	throw new Error("P");
})());
const $placeholder_content = _content("b0", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""), $placeholder_content__setup);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b1", "caught <!>", "b%", 0, $catch_content__$params);

// tags/log-effect.marko
const $input_id__script = _script("c0", ($scope) => document.getElementById("log").textContent += "[" + $scope.c + "]");
const $input_id = /*@__PURE__*/ _const(2, $input_id__script);
