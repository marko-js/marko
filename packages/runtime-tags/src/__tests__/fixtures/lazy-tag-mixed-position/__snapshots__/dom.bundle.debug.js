// template.marko
const $template = "<button class=toggle>Toggle</button><button class=inc>Inc</button><!><!><!><!>";
const $walks = " b b%/&b%c";
const Child = /* @__PURE__ */ _lazy_template("__tests__/child.marko", () => import("./child.mjs").then((n) => n.i).then((mod) => mod.default));
let $lazy_Child_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_value.mjs"));
let $lazy_Child_setup = /* @__PURE__ */ _lazy_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/4");
const $show__OR__value = /* @__PURE__ */ _or(7, ($scope) => $dynamicTag($scope, $scope.show ? Child : null, () => ({ value: $scope.value })));
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/5", ($scope) => {
	$show__OR__value($scope);
	$show__script($scope);
});
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/6", ($scope) => {
	$lazy_Child_tag_input_value($scope["#childScope/3"], $scope.value);
	$show__OR__value($scope);
	$value__script($scope);
});
function $setup($scope) {
	$lazy_Child_setup($scope);
	$show($scope, true);
	$value($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
var child_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_value: () => $input_value,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => "D l",
	default: () => child_default
});
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
