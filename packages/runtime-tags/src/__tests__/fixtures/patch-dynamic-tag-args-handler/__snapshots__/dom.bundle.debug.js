// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag__OR__input_title = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_tag, () => ({
	title: $scope.input_title,
	onClick: $onClick($scope)
})));
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
