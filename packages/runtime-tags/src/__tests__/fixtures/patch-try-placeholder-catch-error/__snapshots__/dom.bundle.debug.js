// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function check(title, fail) {
	if (fail) {
		const err = new Error("boom " + title, { cause: new Error("cause") });
		err.extra = "extra";
		throw err;
	}
	return title;
}
const $await_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "<p> </p>", "D ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__input_slow = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_slow#0:5/subscribe", "input_slow/8", ($scope) => $try_content2__await_promise($scope, $scope._.input_slow));
const $try_content2__setup = ($scope) => {
	$try_content2__input_slow($scope);
	$await_content($scope);
};
const $try_content__input_title__OR__input_fail = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_title#0:3_input_fail#0:4/setup", 1, ($scope) => _text($scope["#text/0"], check($scope._._.input_title, $scope._._.input_fail)));
const $try_content__input_title = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_title#0:3/subscribe", "input_title/6", $try_content__input_title__OR__input_fail, ($scope) => $scope._._, "__tests__/template.marko_0_input_title#3/subscribers", 0);
const $try_content__setup = ($scope) => {
	$try_content__input_title($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_fail#0:4/subscribe", "input_fail/7", $try_content__input_title__OR__input_fail, ($scope) => $scope._._, "__tests__/template.marko_0_input_fail#4/subscribers", 0);
const $placeholder_content__try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $placeholder_content__setup = $placeholder_content__try;
const $placeholder_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $placeholder_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_fail($scope, input.fail);
	$input_slow($scope, input.slow);
};
const $input_title__closure = /*@__PURE__*/ _closure($try_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
const $input_slow__closure = /*@__PURE__*/ _closure($try_content2__input_slow);
const $input_slow = /*@__PURE__*/ _const("input_slow", $input_slow__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
