// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>over</p>");
const $count__OR__m = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "m", /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.count > $scope.m ? 0 : 1)));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", $count__OR__m);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $m = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "m", $count__OR__m);
const $input_min = $m;
const $input = ($scope, input) => $input_min($scope, input.min);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
