// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<span>*</span>");
const $for_content__input_selected = /*@__PURE__*/ _for_selector_patch("__tests__/template.marko_1_input_selected#0:4/setup", "#ul/0", "input_selected", ($scope) => $for_content__if($scope, $scope._.input_selected === $scope["#LoopKey"] ? 0 : 1), 6);
const $for_content__setup = ($scope) => {
	$for_content__input_selected._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup);
const $items = _let("items/5", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, { id: $scope.items.length + 1 }]);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }, { id: 2 }]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_selected($scope, input.selected);
const $input_selected = /*@__PURE__*/ _const("input_selected", $for_content__input_selected);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
