// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__input_w = _resumed["__tests__/template.marko_1_input_w#0:4/patch"] = _with_branches(/*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/1"], $scope._.input_w))));
const $for_content__setup = $for_content__input_w;
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p><!> <!></p>", "D%c%", $for_content__setup, $for_content__$params);
const $xs = /*@__PURE__*/ _let("xs/5", ($scope) => $for($scope, [$scope.xs]));
const $input_items = $xs;
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_w($scope, input.w);
};
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $for_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
