// template.marko
const Child = /* @__PURE__ */ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2);
const $show__OR__value = /* @__PURE__ */ _or(5, ($scope) => $dynamicTag($scope, $scope.d ? Child : null, () => ({
	label: "x",
	value: $scope.e
})));
const $show = /* @__PURE__ */ _let(3, $show__OR__value);
const $value = /* @__PURE__ */ _let(4, $show__OR__value);
const $setup__script = _script("b0", ($scope) => {
	_on($scope.a, "click", function() {
		$show($scope, !$scope.d);
	});
	_on($scope.b, "click", function() {
		$value($scope, $scope.e + 1);
	});
});

// child.marko
const $template = "<div><!>: <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input_value = ($scope, input_value) => _text($scope.b, input_value);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var child_default = /* @__PURE__ */ _template("a", $template, $walks, $setup, $input);
