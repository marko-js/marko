// child.marko
const $template = "<div><!>: <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_value = ($scope, input_value) => _text($scope["#text/1"], input_value);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=toggle>Toggle</button><button class=inc>Inc</button><!><!>";
const $walks = " b b%c";
const Child = /* @__PURE__ */ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2");
const $show__OR__value = /* @__PURE__ */ _or(5, ($scope) => $dynamicTag($scope, $scope.show ? Child : null, () => ({
	label: "x",
	value: $scope.value
})));
const $show = /* @__PURE__ */ _let("show/3", $show__OR__value);
const $value = /* @__PURE__ */ _let("value/4", $show__OR__value);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/1"], "click", function() {
		$value($scope, $scope.value + 1);
	});
});
function $setup($scope) {
	$show($scope, true);
	$value($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
