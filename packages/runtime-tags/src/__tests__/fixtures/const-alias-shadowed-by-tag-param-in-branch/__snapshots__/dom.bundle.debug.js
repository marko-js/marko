// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__input_value = /*@__PURE__*/ _closure_get("value/4", ($scope) => _text($scope["#text/0"], $scope._._.value), ($scope) => $scope._._, "__tests__/template.marko_2_value#0:3/subscribe");
const $for_content__setup = $for_content__input_value;
const $for_content__input = ($scope, input) => _text($scope["#text/1"], input);
const $for_content__$params = ($scope, $params2) => $for_content__input($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span><!><!></span>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1]]);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
function $setup($scope) {
	$if($scope, true ? 0 : 1);
}
const $input = ($scope, input) => $value($scope, input.value);
const $value__closure = /*@__PURE__*/ _closure($for_content__input_value);
const $value = /*@__PURE__*/ _const("value", $value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
