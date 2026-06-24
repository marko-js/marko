// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $if_content3__input_value = /*@__PURE__*/ _closure_get("value2", ($scope) => _text($scope["#text/0"], $scope._._.value2), ($scope) => $scope._._);
const $if_content3__setup = $if_content3__input_value;
const $if_content2__input_value = /*@__PURE__*/ _closure_get("value1", ($scope) => _text($scope["#text/0"], $scope._._.value1), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__input_value;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D l", $if_content2__setup);
const $if_content__input_value = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__if($scope, $scope._.value1 ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$if_content__input_value2._($scope);
};
const $if_content__if2 = /*@__PURE__*/ _if("#text/1", "<span> </span>", "D l", $if_content3__setup);
const $if_content__input_value2 = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__if2($scope, $scope._.value2 ? 0 : 1));
const $if = /*@__PURE__*/ _if("#div/0", "<!><!><!><!>", "b%b%c", $if_content__setup);
const $show = ($scope, show) => $if($scope, show ? 0 : 1);
const $input = ($scope, input) => {
	$show($scope, input.show);
	$value($scope, input.value1);
	$value2($scope, input.value2);
};
const $value__closure = /*@__PURE__*/ _closure($if_content2__input_value);
const $value = /*@__PURE__*/ _const("value1", ($scope) => {
	$if_content__input_value($scope);
	$value__closure($scope);
});
const $value2__closure = /*@__PURE__*/ _closure($if_content3__input_value);
const $value2 = /*@__PURE__*/ _const("value2", ($scope) => {
	$if_content__input_value2($scope);
	$value2__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
