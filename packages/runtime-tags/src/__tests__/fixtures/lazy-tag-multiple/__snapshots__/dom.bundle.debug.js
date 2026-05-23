// template.marko
const $template = "<button>Inc</button><!><!><!><!><!>";
const $walks = " b%/&b%/&c";
let $lazy_ChildA_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child-a.marko.input_value.mjs"));
let $lazy_ChildA_setup = /* @__PURE__ */ _lazy_setup("#text/1", "#childScope/2", () => import("./v:child-a.marko.setup.mjs"));
let $lazy_ChildB_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child-b.marko.input_value.mjs"));
let $lazy_ChildB_setup = /* @__PURE__ */ _lazy_setup("#text/3", "#childScope/4", () => import("./v:child-b.marko.setup.mjs"));
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/5", ($scope) => {
	$lazy_ChildA_tag_input_value($scope["#childScope/2"], $scope.value);
	$lazy_ChildB_tag_input_value($scope["#childScope/4"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$lazy_ChildA_setup($scope);
	$lazy_ChildB_setup($scope);
	$value($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child-a.marko
const $template = "<span class=a> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_a_default = /* @__PURE__ */ _template("__tests__/child-a.marko", $template, "D l", $setup, $input);

// child-b.marko
const $template = "<span class=b> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value * 2);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_b_default = /* @__PURE__ */ _template("__tests__/child-b.marko", $template, "D l", $setup, $input);

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
