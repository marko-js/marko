// tags/log-effect.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_id__script = _script("__tests__/tags/log-effect.marko_0_input_id#2", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", $input_id__script);
const $input = ($scope, input) => $input_id($scope, input.id);
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div id=log></div><!>${_w0}<!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `b%/${_w0}&b%c`)("");
const $await_content2__setup = ($scope) => $input_id($scope["#childScope/0"], "q");
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", " ", " ", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""), $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("q", 3));
};
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => document.getElementById("log").textContent += "[r]");
const $await_content__setup = $await_content__setup__script;
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", 0, 0, $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("r", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $try2 = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
function $setup($scope) {
	$input_id($scope["#childScope/1"], "a");
	$try($scope);
	$try2($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
