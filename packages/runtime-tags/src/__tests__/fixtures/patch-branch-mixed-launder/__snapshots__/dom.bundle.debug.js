// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>win</p>");
const $input__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input#3_count#4/setup", 5, ($scope) => $if($scope, $scope.count + ($scope.input[$scope.input.key] || 0) > 10 ? 0 : 1));
const $count = _let("count/4", $input__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _const("input", $input__OR__count);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
