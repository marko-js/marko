// template.marko
const $template = "<button>Inc</button><!><!><!>";
const $walks = " b%/&c";
let $lazy_Child_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_value.mjs"));
let $lazy_Child_setup = /* @__PURE__ */ _lazy_setup("#text/1", "#childScope/2", () => import("./v:child.marko.setup.mjs"));
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	$lazy_Child_tag_input_value($scope["#childScope/2"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$lazy_Child_setup($scope);
	$value($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
