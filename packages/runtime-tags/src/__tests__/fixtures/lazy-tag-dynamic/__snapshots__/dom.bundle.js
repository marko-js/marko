// total: 366 (min) 219 (brotli)
// template.marko: 314 (min) 189 (brotli)
const Child = /* @__PURE__ */ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2);
const $show__OR__value = /* @__PURE__ */ _or(5, ($scope) => $dynamicTag($scope, $scope.d ? Child : null, () => ({
	label: "x",
	value: $scope.e
})));
const $show__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$show__OR__value($scope);
	$show__script($scope);
});
const $value__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$value($scope, $scope.e + 1);
}));
const $value = /* @__PURE__ */ _let(4, ($scope) => {
	$show__OR__value($scope);
	$value__script($scope);
});

// total: 189 (min) 156 (brotli)
// child.marko: 0 (min) 1 (brotli)
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
