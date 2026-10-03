// tags/log-effect.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_id__script = _script("__tests__/tags/log-effect.marko_0_input_id#2", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", $input_id__script);
const $input = ($scope, input) => $input_id($scope, input.id);
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", 0, $input);

// template.marko
const $template = "<div id=log></div><!><!><!>";
const $walks = "b%b%c";
const $await_content3__done = ($scope, done) => _text($scope["#text/0"], done);
const $await_content3__$params = ($scope, $params5) => $await_content3__done($scope, $params5[0]);
const $await_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content2__$params = ($scope, $params4) => $await_content2__x($scope, $params4[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$input_id($scope["#childScope/0"], "caught");
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&b%c`)(""), $try_content2__setup, 0, $catch_content);
const $await_content__setup = ($scope) => {
	$input_id($scope["#childScope/0"], "reordered");
	$await_content__try($scope);
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&b%c`)(""), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
function $setup($scope) {
	$await_content3($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("done", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
