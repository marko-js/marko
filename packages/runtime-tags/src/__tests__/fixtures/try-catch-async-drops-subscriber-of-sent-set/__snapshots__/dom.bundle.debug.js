// template.marko
const $Item_content__walks = " b";
const $Item_content__template = "<span>x</span>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!><!>`)($Item_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b%c`)($Item_content__walks);
const $await_content3__$params = ($scope, $params5) => _text($scope["#text/0"], $params5[0]);
const $catch_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_5*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content2__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $Item_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Item_content__walks));
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content3($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
	$try_content__await_promise2($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $el_getter = _hoist_resume("__tests__/template.marko_0_#span#1:0/hoist", "#span/0", "ClosureScopes:1");
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});
function $setup($scope) {
	$await_content2($scope);
	$await_promise($scope, resolveAfter("a", 3));
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
