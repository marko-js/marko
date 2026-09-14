// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content2__if = /*@__PURE__*/ _if("#text/0", "<p>both</p>");
const $if_content2__input_b = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_b", /*@__PURE__*/ _closure_get("input_b", ($scope) => $if_content2__if($scope, $scope._._.input_b ? 0 : 1), ($scope) => $scope._._), 0);
const $if_content2__setup = $if_content2__input_b;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $if_content__input_a = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_a ? 0 : 1)));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_a", $if_content__input_a);
const $input_b__closure = /*@__PURE__*/ _closure($if_content2__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
