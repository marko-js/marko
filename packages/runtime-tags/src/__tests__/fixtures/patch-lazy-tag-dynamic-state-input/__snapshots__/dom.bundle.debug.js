// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button class=n> </button><main><!></main>";
const $walks = " D lD%l";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_show__OR__input_label__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_show", /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.input_show ? Child : null, () => ({ label: `${$scope.input_label}${$scope.n}` })), 2)));
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_show__OR__input_label__OR__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_show", $input_show__OR__input_label__OR__n);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_label", $input_show__OR__input_label__OR__n);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
