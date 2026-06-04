// total: 284 (min) 189 (brotli)
// template.marko: 221 (min) 165 (brotli)
const Child = /* @__PURE__ */ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(1);
const $show__OR__value = /* @__PURE__ */ _or(4, ($scope) => $dynamicTag($scope, $scope.c ? Child : null, () => ({ value: $scope.d })));
const $value__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.d + 1);
}));
const $value = /* @__PURE__ */ _let(3, ($scope) => {
	$show__OR__value($scope);
	$value__script($scope);
});

// total: 149 (min) 120 (brotli)
// child.marko: 0 (min) 1 (brotli)
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("a", $template, "D l", $setup, $input);
