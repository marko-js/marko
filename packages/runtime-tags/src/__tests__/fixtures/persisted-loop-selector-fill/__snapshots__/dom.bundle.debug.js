// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<span>*</span>");
const $for_content__input_selected__OR__item_id = /*@__PURE__*/ _fill_join_for("__tests__/template.marko0", "input_selected", /*@__PURE__*/ _or(5, ($scope) => $for_content__if($scope, $scope._.input_selected === $scope.item_id ? 0 : 1)), "#ul/0");
const $for_content__input_selected = /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_selected__OR__item_id);
const $for_content__setup = $for_content__input_selected;
const $for_content__item_id = /*@__PURE__*/ _const("item_id", ($scope) => {
	_text($scope["#text/0"], $scope.item_id);
	$for_content__input_selected__OR__item_id($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, { id: $scope.items?.length + 1 }]);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }, { id: 2 }]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_selected($scope, input.selected);
const $input_selected = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_selected", $for_content__input_selected);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
