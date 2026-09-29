// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__item_n = ($scope, item_n) => _text($scope["#text/0"], item_n);
const $for_content__$params = ($scope, $params2) => $for_content__item_n($scope, $params2[0]?.n);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_keyField__OR__items = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_keyField", /*@__PURE__*/ _or(6, ($scope) => $for($scope, [$scope.items, function(item) {
	return item[$scope.input_keyField];
}])));
const $items = /*@__PURE__*/ _let("items/5", $input_keyField__OR__items);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, {
		n: 3,
		id: "z"
	}]);
}));
function $setup($scope) {
	$items($scope, [{
		n: 1,
		id: "x"
	}, {
		n: 2,
		id: "y"
	}]);
	$setup__script($scope);
}
const $input_keyField = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_keyField", $input_keyField__OR__items);
const $input = ($scope, input) => $input_keyField($scope, input.keyField);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
