// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__entry = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_first__OR__items = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_first", /*@__PURE__*/ _or(6, ($scope) => $for($scope, [[$scope.input_first, ...$scope.items]])));
const $items = /*@__PURE__*/ _let("items/5", $input_first__OR__items);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, "b"]);
}));
function $setup($scope) {
	$items($scope, ["a"]);
	$setup__script($scope);
}
const $input_first = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_first", $input_first__OR__items);
const $input = ($scope, input) => $input_first($scope, input.first);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
