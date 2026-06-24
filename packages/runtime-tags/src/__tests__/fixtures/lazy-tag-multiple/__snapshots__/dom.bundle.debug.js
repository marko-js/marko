// child-a.marko
const $template = "<span class=a> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/child-a.marko_0", ($scope) => console.log("loaded a"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_a_default = /*@__PURE__*/ _template("__tests__/child-a.marko", $template, "D l", $setup, $input);

// child-b.marko
const $template = "<span class=b> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value * 2);
const $setup__script = _script("__tests__/child-b.marko_0", ($scope) => console.log("loaded b"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_b_default = /*@__PURE__*/ _template("__tests__/child-b.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<button>Inc</button><!><!><!><!><!>";
const $walks = " b%/&b%/&c";
let $load_ChildA_setup = /*@__PURE__*/ _load_setup("#text/1", "#childScope/2", () => import("./v:child-a.marko.setup.mjs"));
let $load_ChildA_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child-a.marko.input_value.mjs"));
let $load_ChildB_setup = /*@__PURE__*/ _load_setup("#text/3", "#childScope/4", () => import("./v:child-b.marko.setup.mjs"));
let $load_ChildB_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child-b.marko.input_value.mjs"));
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /*@__PURE__*/ _let("value/5", ($scope) => {
	$load_ChildA_tag_input_value($scope["#childScope/2"], $scope.value);
	$load_ChildB_tag_input_value($scope["#childScope/4"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$load_ChildA_setup($scope);
	$load_ChildB_setup($scope);
	$value($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child-a.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];

// v:child-b.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
