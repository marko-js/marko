// total: 448 (min) 263 (brotli)
// template.marko: 400 (min) 227 (brotli)
const Child = /* @__PURE__ */ _lazy_template("a", () => import("./child.mjs").then((n) => n.n).then((mod) => mod.default));
let $lazy_Child_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_value.mjs"));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(4);
const $show__OR__value = /* @__PURE__ */ _or(7, ($scope) => $dynamicTag($scope, $scope.f ? Child : null, () => ({ value: $scope.g })));
const $show__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));
const $show = /* @__PURE__ */ _let(5, ($scope) => {
	$show__OR__value($scope);
	$show__script($scope);
});
const $value__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$value($scope, $scope.g + 1);
}));
const $value = /* @__PURE__ */ _let(6, ($scope) => {
	$lazy_Child_tag_input_value($scope.d, $scope.g);
	$show__OR__value($scope);
	$value__script($scope);
});

// total: 403 (min) 255 (brotli)
// child.marko: 0 (min) 1 (brotli)
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
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("a", $template, "D l", $setup, $input);
