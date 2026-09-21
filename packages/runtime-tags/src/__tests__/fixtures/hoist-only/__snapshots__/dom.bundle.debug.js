// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content2__hoist3_getter = _hoist_resume("__tests__/template.marko_2_hoist3#2/hoist", "hoist3");
const $if_content2__hoist = /*@__PURE__*/ _const("hoist3", ($scope) => _assert_hoist($scope.hoist3));
const $if_content2__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => $if_content2__hoist($scope, $hoist2($scope)), ($scope) => $scope._._);
const $if_content2__x__OR__z__script = _script("__tests__/template.marko_2_x#4_z#0", ($scope) => {
	$scope._._.x();
	$scope.z();
});
const $if_content2__x__OR__z = /*@__PURE__*/ _or(1, $if_content2__x__OR__z__script);
const $if_content2__z = /*@__PURE__*/ _const("z", $if_content2__x__OR__z);
const $if_content2__setup = ($scope) => {
	$if_content2__input_value($scope);
	$if_content2__x($scope);
	$if_content2__z($scope, $if_content2__hoist3_getter($scope));
};
const $if_content2__x = /*@__PURE__*/ _closure_get("x", $if_content2__x__OR__z, ($scope) => $scope._._);
const $if_content__if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content2__setup);
const $if_content__setup = ($scope) => $if_content__if($scope, 1 ? 0 : 1);
const $hoist1_getter = _hoist_resume("__tests__/template.marko_0_hoist1#5/hoist", "hoist1");
const $x = /*@__PURE__*/ _const("x");
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
function $setup($scope) {
	$x($scope, $hoist1_getter($scope));
	$if($scope, 1 ? 0 : 1);
}
const $hoist3 = /*@__PURE__*/ _const("hoist1", ($scope) => _assert_hoist($scope.hoist1));
const $input_value__closure = /*@__PURE__*/ _closure($if_content2__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	$hoist3($scope, $hoist($scope));
	$input_value__closure($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
const $hoist2 = ($scope) => () => $scope._._.input_value;
const $hoist = ($scope) => () => $scope.input_value;
_resumed["__tests__/template.marko_2/hoist2"] = $hoist2;
_resumed["__tests__/template.marko_0/hoist"] = $hoist;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
