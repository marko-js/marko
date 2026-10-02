// template.marko
const $template = "<svg><!></svg><!><!>";
const $walks = "D%l%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $await_content2__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content2__v = ($scope, v) => $load_Child_tag_input_value($scope["#childScope/1"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content__v_length = ($scope, v_length) => _attr($scope["#rect/0"], "width", v_length);
const $await_content__$params = ($scope, $params2) => $await_content__v_length($scope, $params2[0]?.length);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<rect height=1></rect>", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%/&", $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$await_promise($scope, resolveAfter("rr", 2));
	$await_promise2($scope, resolveAfter("x", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.css
var child_default = ".child {\n  color: red;\n}\n";

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
