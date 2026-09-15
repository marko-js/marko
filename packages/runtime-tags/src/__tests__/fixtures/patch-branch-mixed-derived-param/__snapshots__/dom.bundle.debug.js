// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>over</p>");
const $count__OR__limit = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "limit", /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.count > $scope.limit ? 0 : 1)));
const $count = /*@__PURE__*/ _let("count/5", $count__OR__limit);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $limit = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "limit", $count__OR__limit);
const $input_min = ($scope, input_min) => $limit($scope, input_min + 1);
const $input = ($scope, input) => $input_min($scope, input.min);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
