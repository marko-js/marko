// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__input_p1__OR__y = /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/0"], $scope._.input_p1 + $scope.y));
const $for_content__input_p = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_p1__OR__y, 4);
const $for_content__y = /*@__PURE__*/ _let("y/1", $for_content__input_p1__OR__y);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => $for_content__y($scope, 9));
const $for_content__setup = ($scope) => {
	$for_content__input_p._($scope);
	$for_content__y($scope, 0);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", " ", " ", $for_content__setup);
function $setup($scope) {
	$for($scope, [[1]]);
}
const $input_p__script = _script("__tests__/template.marko_0_input_p1#3", ($scope) => console.log($scope.input_p1));
const $input_p = /*@__PURE__*/ _const("input_p1", ($scope) => {
	$for_content__input_p($scope);
	$input_p__script($scope);
});
const $input = ($scope, input) => $input_p($scope, input.p1);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
