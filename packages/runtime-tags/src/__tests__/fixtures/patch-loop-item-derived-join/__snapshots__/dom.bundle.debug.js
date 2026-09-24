// template.marko
const $template = "<button class=n> </button><ul></ul>";
const $walks = " D l b";
const $for_content__label = /*@__PURE__*/ _init_for_closure("__tests__/template.marko_1_label#9/init", "#ul/2", ($scope) => _text($scope["#text/1"], $scope._.label));
const $for_content__setup = $for_content__label;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $label = /*@__PURE__*/ _const("label", ($scope) => {
	_text($scope["#text/1"], $scope.label);
	$for_content__label($scope);
});
const $input_prefix__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_prefix", /*@__PURE__*/ _or(8, ($scope) => $label($scope, `${$scope.input_prefix}${$scope.n}`)));
const $n = /*@__PURE__*/ _let("n/7", $input_prefix__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_prefix = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_prefix", $input_prefix__OR__n);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/2", "<li><!>:<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_prefix($scope, input.prefix);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
