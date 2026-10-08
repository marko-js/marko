// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag__OR__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_title", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_tag", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_tag#5_input_title#6/init", 7, ($scope) => $dynamicTag($scope, $scope.input_tag, () => ({
	title: $scope.input_title,
	onClick: $onClick($scope)
})))));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_tag__OR__input_title);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_title($scope, input.title);
};
const $onClick = ($scope) => function() {
	$n($scope, $scope.input_title.length);
};
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
