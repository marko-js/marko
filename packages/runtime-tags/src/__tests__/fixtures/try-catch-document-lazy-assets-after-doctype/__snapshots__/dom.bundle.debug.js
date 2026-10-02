// layout.marko
const $template$1 = "<!><html><head><title>T</title></head><body><!></body></html>";
const $walks$1 = "bDbD%/&m";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
function $setup$1($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], 1);
}
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $catch_content = _content("__tests__/template.marko_2*content", "caught");
const $try_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
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
