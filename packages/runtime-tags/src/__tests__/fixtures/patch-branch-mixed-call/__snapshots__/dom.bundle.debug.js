// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>ok</p>");
const $input__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input", /*@__PURE__*/ _or(5, ($scope) => $if($scope, $scope.count > $scope.input.min && $scope.input.check() ? 0 : 1)));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/4", $input__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input", $input__OR__count);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
