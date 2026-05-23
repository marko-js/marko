// template.marko
const $template = "<button>Inc</button><!><!>";
const $walks = " b%c";
const Child = /* @__PURE__ */ _lazy_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $show__OR__value = /* @__PURE__ */ _or(4, ($scope) => $dynamicTag($scope, $scope.show ? Child : null, () => ({ value: $scope.value })));
const $show = /* @__PURE__ */ _let("show/2", $show__OR__value);
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	$show__OR__value($scope);
	$value__script($scope);
});
function $setup($scope) {
	$show($scope, true);
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
