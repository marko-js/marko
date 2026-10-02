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
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], 1);
	_text($scope["#text/2"], (() => {
		throw new Error("S");
	})());
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%/&b%", $try_content__setup, 0, $catch_content);
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
