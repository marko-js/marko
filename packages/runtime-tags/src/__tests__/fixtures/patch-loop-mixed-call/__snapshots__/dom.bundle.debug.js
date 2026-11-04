// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_extra__OR__items = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_extra#4_items#5/setup", 6, ($scope) => $for($scope, [$scope.items.concat($scope.input_extra)]));
const $items = _let("items/5", $input_extra__OR__items);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, "b"]);
}));
function $setup($scope) {
	$items($scope, ["a"]);
	$setup__script($scope);
}
const $input_extra = /*@__PURE__*/ _const("input_extra", $input_extra__OR__items);
const $input = ($scope, input) => $input_extra($scope, input.extra);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
