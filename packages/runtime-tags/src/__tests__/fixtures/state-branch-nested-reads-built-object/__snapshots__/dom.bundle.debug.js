// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $if_content2__b = /*@__PURE__*/ _closure_get("b/8", ($scope) => _text($scope["#text/0"], JSON.stringify($scope._._.b)), ($scope) => $scope._._, "__tests__/template.marko_2_b#0:6/subscribe");
const $if_content2__setup = $if_content2__b;
const $if_content__if = /*@__PURE__*/ _if("#div/0", "<i> </i>", "D ", $if_content2__setup);
const $if_content__open = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.open ? 0 : 1));
const $if_content__setup = $if_content__open;
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => {
	$if($scope, $scope.open ? 0 : 1);
	$if_content__open($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $b__closure = /*@__PURE__*/ _closure($if_content2__b);
const $b = /*@__PURE__*/ _const("b", $b__closure);
const $input_x = ($scope, input_x) => $b($scope, { value: input_x });
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
