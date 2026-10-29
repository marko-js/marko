// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = ($_) => {};
const $for_content__input_b__OR__x__OR__i = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "i", /*@__PURE__*/ _fill_for("__tests__/template.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_b#0:5_x#0:6_i#2/init", 3, ($scope) => _text($scope["#text/0"], $scope._.x + $scope._.input_b + $scope.i), 2), "#ul/0"));
const $for_content__input_b = /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_b__OR__x__OR__i);
const $for_content__setup = ($scope) => {
	$for_content__input_b._($scope);
	$for_content__x._($scope);
};
const $for_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:6/init", /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_b__OR__x__OR__i));
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__input_b__OR__x__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $x = _let("x/6", $for_content__x);
const $input_a = $x;
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li> </li>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_items($scope, input.items);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_b", $for_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
