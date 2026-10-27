// template.marko
const $template = "<pre id=log></pre><!><!>";
const $walks = "/&b%c";
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $Use_content__fn__OR__where__script = _script("__tests__/template.marko_3_fn#2_where#3", ($scope) => {
	{
		const el = document.getElementById("log");
		el.textContent += $scope.where + ":" + (el.last === $scope.fn ? "same;" : "new;");
		el.last = $scope.fn;
	}
});
const $Use_content__fn__OR__where = /*@__PURE__*/ _or_resume("__tests__/template.marko_3_fn#2_where#3/init", 4, $Use_content__fn__OR__where__script);
const $Use_content__fn = /*@__PURE__*/ _const("fn", $Use_content__fn__OR__where);
const $Use_content__where = /*@__PURE__*/ _const("where", $Use_content__fn__OR__where);
const $Use_content__$params = ($scope, $params2) => $Use_content__$temp($scope, $params2[0]);
const $Use_content__$temp = ($scope, $temp) => {
	$Use_content__fn($scope, $temp.fn);
	$Use_content__where($scope, $temp.where);
};
const $await_content__fn = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_fn#0:6/init", /*@__PURE__*/ _closure_get("fn/8", ($scope) => $Use_content__fn($scope["#childScope/0"], $scope._._.fn), ($scope) => $scope._._, "__tests__/template.marko_2_fn#0:6/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__fn($scope);
	$Use_content__where($scope["#childScope/0"], "late");
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!>", "/&", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:5/init", /*@__PURE__*/ _closure_get("input_promise/7", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $fn2__closure = /*@__PURE__*/ _closure($await_content__fn);
const $fn2 = /*@__PURE__*/ _const("fn", ($scope) => {
	$fn2__closure($scope);
	$Use_content__fn($scope["#childScope/0"], $scope.fn);
});
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => $fn2($scope, $fn($scope)));
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$Use_content__where($scope["#childScope/0"], "early");
	$try($scope);
}
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_promise($scope, input.promise);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $fn = ($scope) => () => $scope.input_x;
_bind_resume("__tests__/template.marko_0/fn input_x", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
