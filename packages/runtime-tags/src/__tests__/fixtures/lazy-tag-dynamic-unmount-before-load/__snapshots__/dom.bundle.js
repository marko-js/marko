// total: 15084 (min) 5815 (brotli)
// template.marko: 201 (min) 153 (brotli)
const Child = /* @__PURE__ */ _lazy_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(1);
const $show__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$dynamicTag($scope, $scope.c ? Child : null, () => ({ value: 1 }));
	$show__script($scope);
});

// total: 160 (min) 126 (brotli)
// child.marko: 0 (min) 1 (brotli)
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("a", $template, "D l", $setup, $input);
