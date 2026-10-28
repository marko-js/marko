// template.marko
const $template = "<p></p><button> </button>";
const $walks = " b D l";
const $input_name__OR__uid = /*@__PURE__*/ _or(8, ($scope) => _attr($scope["#p/0"], "title", `${$scope.uid}-${$scope.input_name}`));
const $uid = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _let("uid/7", $input_name__OR__uid));
const $input_id = $uid;
const $input_name = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_name", $input_name__OR__uid));
const $n = /*@__PURE__*/ _let("n/9", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_name($scope, input.name);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
