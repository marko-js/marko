// template.marko
const Child = /*@__PURE__*/ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $input_show__OR__input_label__OR__n = /*@__PURE__*/ _fill_join("b1", 6, /*@__PURE__*/ _fill_join("b0", 5, /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.f ? Child : null, () => ({ label: `${$scope.g}${$scope.h}` })), 2)));
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_show__OR__input_label__OR__n($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("a", $template, "D l", 0, $input);
