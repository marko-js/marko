// child.marko
const $template = "<span class=child> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<pre id=log></pre><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => document.getElementById("log").textContent += document.querySelector(".child")?.textContent);
const $await_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content__setup__script($scope);
};
const $await_content__v = ($scope, v) => $load_Child_tag_input_value($scope["#childScope/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], "p");
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%/&", $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%/&", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("b", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
