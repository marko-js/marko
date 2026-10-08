// template.marko
const $template = "<div></div><button>+</button>";
const $walks = " b b";
const $input_label__OR__count__script = _script("__tests__/template.marko_0_input_label#4_count#5", ($scope) => _el_read($scope["#div/0"]).textContent = `${$scope.input_label}:${$scope.count}`);
const $input_label__OR__count = /*@__PURE__*/ _or(6, $input_label__OR__count__script);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", $input_label__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__count);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
