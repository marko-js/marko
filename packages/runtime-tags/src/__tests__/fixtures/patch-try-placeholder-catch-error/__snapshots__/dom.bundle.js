// template.marko
function check(title, fail) {
	if (fail) {
		const err = new Error("boom " + title, { cause: /* @__PURE__ */ new Error("cause") });
		err.extra = "extra";
		throw err;
	}
	return title;
}
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a2", "<p> </p>", "D ", 0, $catch_content__$params);
const $try_content__input_title__OR__input_fail = /*@__PURE__*/ _fill_subscribers("a11", 4, /*@__PURE__*/ _fill_subscribers("a10", 3, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, check($scope._._.d, $scope._._.e))), 6, 0), 7, 0);
const $try_content__input_title = /*@__PURE__*/ _closure_get(6, $try_content__input_title__OR__input_fail, ($scope) => $scope._._, "a0");
const $try_content__setup = ($scope) => {
	$try_content__input_title($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _closure_get(7, $try_content__input_title__OR__input_fail, ($scope) => $scope._._, "a1");
const $placeholder_content = _content$1("a9", "<!><!><!>", "b%", /* @__PURE__ */ _try(0, "<p> </p>", "D ", $try_content__setup, 0, $catch_content));
