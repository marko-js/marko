// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__input_value = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.value));
const $for_content__setup = $for_content__input_value;
const $for_content__input = ($scope, input) => _text($scope["#text/1"], input);
const $for_content__$params = ($scope, $params2) => $for_content__input($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span><!>-<!></span>", "D%c%", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [[1, 2]]);
}
const $input = ($scope, input) => $value($scope, input.value);
const $value = /*@__PURE__*/ _const("value", $for_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
