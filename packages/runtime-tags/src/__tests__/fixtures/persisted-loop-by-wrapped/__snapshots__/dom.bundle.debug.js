// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#text/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_key__OR__items = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_key", /*@__PURE__*/ _or(6, ($scope) => $for($scope, [$scope.items, $scope.input_key.bind(null)])));
const $items = /*@__PURE__*/ _let("items/5", $input_key__OR__items);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, { id: 2 }]);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }]);
	$setup__script($scope);
}
const $input_key = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_key", $input_key__OR__items);
const $input = ($scope, input) => $input_key($scope, input.key);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
