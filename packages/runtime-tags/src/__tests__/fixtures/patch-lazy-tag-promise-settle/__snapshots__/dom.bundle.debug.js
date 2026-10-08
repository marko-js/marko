// probe.marko
const $template = "<div> </div>";
const $walks = "D l";
const $settled = /*@__PURE__*/ _fill_let("__tests__/probe.marko_fill0", "settled/4", ($scope) => _text($scope["#text/0"], $scope.settled ? "settled" : "pending"));
function $setup($scope) {
	$settled($scope, false);
}
const $input_promise__script = _script("__tests__/probe.marko_0_input_promise#3", ($scope) => $scope.input_promise.then(() => {
	$settled($scope, true);
}));
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__script);
const $input = ($scope, input) => $input_promise($scope, input.promise);
var probe_default = /*@__PURE__*/ _template("__tests__/probe.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&b%c";
let $load_Probe_setup = /*@__PURE__*/ _load_setup(() => import("./v:probe.marko.setup.mjs"));
let $load_Probe_tag_input_promise = /*@__PURE__*/ _load_signal_patch(() => import("./v:probe.marko.input_promise.mjs"), "ready:__tests__/probe.marko");
const $await_content__v_name = ($scope, v_name) => _text($scope["#text/0"], v_name);
const $await_content__$params = ($scope, $params2) => $await_content__v_name($scope, $params2[0]?.name);
const $placeholder_content = _content("__tests__/template.marko_2*content", "<span class=loading>...</span>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_promise#0:5/init", "input_promise/6", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:5/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$load_Probe_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$try($scope);
}
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", ($scope) => {
	$load_Probe_tag_input_promise($scope["#childScope/1"], $scope.input_promise);
	$input_promise__closure($scope);
});
const $input = ($scope, input) => $input_promise($scope, input.promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:probe.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
