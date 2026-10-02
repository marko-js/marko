// child.marko
const $template = "<span>child</span>";
const $walks = "b";
const $setup__script = _script("__tests__/child.marko_0", ($scope) => document.getElementById("log").textContent += "[lazy effect ran]");
const $setup = $setup__script;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// template.marko
const $template = "<div id=log></div><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%/&b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
