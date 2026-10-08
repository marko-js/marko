// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__fmt = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "fmt", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.fmt())));
const $if_content__setup = $if_content__fmt;
const $fmt2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "fmt", $if_content__fmt);
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_b", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_a#4_input_b#5/init", 6, ($scope) => $fmt2($scope, $fmt($scope)))));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill3", "open/8", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $fmt = ($scope) => () => $scope.input_a + ":" + $scope.input_b;
_resumed["__tests__/template.marko_0/fmt"] = $fmt;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
