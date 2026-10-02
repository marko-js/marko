// template.marko
const $Item_content__walks = " b";
const $Item_content__template = "<span>x</span>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Item_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Item_content__walks);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__setup = ($scope) => _text($scope["#text/1"], (() => {
	throw new Error("ERROR!");
})());
const $await_content__try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0} `)($Item_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Item_content__walks), $try_content__setup, 0, $catch_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $el_getter = _hoist_resume("__tests__/template.marko_0_#span#1:0/hoist", "#span/0", "ClosureScopes:1");
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(1, 1));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
