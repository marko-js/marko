// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $placeholder_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], "loading");
};
const $placeholder_content = _content("__tests__/template.marko_4*content", "<!><!><!>", "b%/&", $placeholder_content__setup);
const $await_content2__t = /*@__PURE__*/ _closure_get("t/3", ($scope) => _text($scope["#text/0"], $scope._._.t), ($scope) => $scope._._);
const $await_content2__setup = $await_content2__t;
const $await_content2__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<!> <!>", "%c%", $await_content2__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("body", 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content__$params = ($scope, $params2) => $await_content__t($scope, $params2[0]);
const $await_content__t = /*@__PURE__*/ _const("t");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("try", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// child.css
var child_default = ".child {\n  color: green;\n}\n";

// child.marko
const $template = "<span class=child> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
