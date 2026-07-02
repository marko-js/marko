// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<button class=toggle>Toggle</button><button class=inc>Inc</button><!><!><!><!>";
const $walks = " b b%/&b%c";
const Child = /* @__PURE__ */ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/4");
const $show__OR__value = /* @__PURE__ */ _or(7, ($scope) => $dynamicTag($scope, $scope.show ? Child : null, () => ({ value: $scope.value })));
const $show = /* @__PURE__ */ _let("show/5", $show__OR__value);
const $value = /* @__PURE__ */ _let("value/6", ($scope) => {
	$load_Child_tag_input_value($scope["#childScope/3"], $scope.value);
	$show__OR__value($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/1"], "click", function() {
		$value($scope, $scope.value + 1);
	});
});
function $setup($scope) {
	$load_Child_setup($scope);
	$show($scope, true);
	$value($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
