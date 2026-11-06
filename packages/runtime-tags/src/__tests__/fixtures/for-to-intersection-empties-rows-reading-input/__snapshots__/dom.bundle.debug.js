// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__input_p = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.input_p2), 6);
const $for_content__setup = $for_content__input_p;
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/0", " ", " ", $for_content__setup);
const $input_p1__OR__input_p = /*@__PURE__*/ _or(5, ($scope) => $for($scope, [$scope.input_p1 ? 5 : $scope.input_p2, 2]));
const $input_p = /*@__PURE__*/ _const("input_p1", $input_p1__OR__input_p);
const $input_p2 = /*@__PURE__*/ _const("input_p2", ($scope) => {
	$input_p1__OR__input_p($scope);
	$for_content__input_p($scope);
});
const $input = ($scope, input) => {
	$input_p($scope, input.p1);
	$input_p2($scope, input.p2);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
