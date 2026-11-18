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
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $catch_content2__err = ($scope, err) => _text($scope["#text/0"], err?.message);
const $catch_content2 = _content_resume("__tests__/template.marko_4*content", " ", " ", 0, $catch_content2__err);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__v);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 2));
};
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__err);
const $try_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content2);
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__v);
const $try_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$await_content2($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!><!>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&b%b%c`)(""), $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
