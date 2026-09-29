// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<span>*</span>");
const $for_content__input_selected = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_selected", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => $for_content__if($scope, $scope._.input_selected === $scope["#LoopKey"] ? 0 : 1)));
const $for_content__setup = ($scope) => {
	$for_content__input_selected._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup);
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
