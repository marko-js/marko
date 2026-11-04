// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $if_content__b = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_b#0:6/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], JSON.stringify($scope._.b)));
const $if_content__setup = $if_content__b;
const $if = /*@__PURE__*/ _if("#text/0", "<i> </i>", "D ", $if_content__setup);
const $open = _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $b = /*@__PURE__*/ _const("b", $if_content__b);
const $input_x = ($scope, input_x) => $b($scope, { value: input_x });
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
