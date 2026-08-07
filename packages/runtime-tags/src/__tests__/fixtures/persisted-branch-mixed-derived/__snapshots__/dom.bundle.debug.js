// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>");
const $big = ($scope, big) => $if($scope, big ? 0 : 1);
const $input_min__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_min", /*@__PURE__*/ _or(6, ($scope) => $big($scope, $scope.count > $scope.input_min)));
const $count = /*@__PURE__*/ _let("count/5", $input_min__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
const $input_min = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_min", $input_min__OR__count);
const $input = ($scope, input) => $input_min($scope, input.min);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
