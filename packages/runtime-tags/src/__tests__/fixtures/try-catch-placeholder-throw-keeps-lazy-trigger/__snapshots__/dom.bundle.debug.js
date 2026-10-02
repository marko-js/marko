// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("loaded"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%/&c";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $placeholder_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("P");
})());
const $placeholder_content = _content("__tests__/template.marko_4*content", " ", " ", $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("x", 1));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/3", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], 1);
	$await_content2($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, resolveAfter("y", 2));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!><!>", "b%/&b%b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Child_tag_input_value($scope["#childScope/2"], 2);
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
