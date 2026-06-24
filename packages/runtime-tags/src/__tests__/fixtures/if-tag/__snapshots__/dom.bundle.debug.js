// template.marko
const $template = "<!><!><!><div> </div>";
const $walks = "b%b%bD l";
const $setup = () => {};
const $if = /*@__PURE__*/ _if("#text/0", "Hello", "b");
const $if2 = /*@__PURE__*/ _if("#text/1", "World", "b");
const $input_a__OR__input_b = /*@__PURE__*/ _or(7, ($scope) => {
	$if($scope, $scope.input_a + $scope.input_b ? 0 : 1);
	$if2($scope, ($scope.input_a, $scope.input_b) ? 0 : 1);
});
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input_x__OR__input_y = /*@__PURE__*/ _or(10, ($scope) => _text($scope["#text/2"], $scope.input_x ? "A" : $scope.input_y ? "B" : "C"));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__input_y);
const $input_y = /*@__PURE__*/ _const("input_y", $input_x__OR__input_y);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
