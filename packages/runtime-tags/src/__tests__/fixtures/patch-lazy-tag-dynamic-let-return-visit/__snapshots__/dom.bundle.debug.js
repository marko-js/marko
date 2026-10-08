// child.marko
const $template = "<button class=count><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=n> </button><main><!></main>";
const $walks = " D lD%l";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "n/8", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_show__OR__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_show", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_show#5_input_label#6/init", 7, ($scope) => $dynamicTag($scope, $scope.input_show ? Child : null, () => ({ label: $scope.input_label })))));
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_show__OR__input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
