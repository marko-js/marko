// tags/log-effect.marko
const $template$1 = "";
const $walks$1 = "";
const $setup__script = _script("__tests__/tags/log-effect.marko_0", ($scope) => document.getElementById("log").textContent = "caught body effect ran");
const $setup$1 = $setup__script;
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", $setup$1);

// template.marko
const $template = "<div id=log></div><!><!>";
const $walks = "b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params5) => $await_content2__v($scope, $params5[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params4) => $await_content__v($scope, $params4[0]);
const $catch_content2__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content("__tests__/template.marko_4*content", " ", " ", 0, $catch_content2__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 2));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__$params);
const $try_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content2);
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$await_content2($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!><!>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&b%b%c`)(""), $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
