// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value__script = _script("__tests__/child.marko_0_input_value#3", ($scope) => console.log("loaded " + $scope.input_value));
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	_text($scope["#text/0"], $scope.input_value);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $try_content2__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], "body");
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("never shown", 2));
};
const $catch_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], "catch");
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/2"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "<!><!> caught <!>", "b%/&c%", $catch_content__setup, $catch_content__$params);
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%/&b%", $try_content2__setup, $placeholder_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 0));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
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
