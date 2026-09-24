// template.marko
const $template = "<button>drop</button><ul></ul>";
const $walks = " b b";
const $for_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_label", /*@__PURE__*/ _for_closure("#ul/1", ($scope) => _text($scope["#text/1"], $scope._.input_label)));
const $for_content__setup = ($scope) => {
	$for_content__input_label._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li><!>: <!></li>", "D%c%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.filter((item) => item.id !== 2));
}));
function $setup($scope) {
	$items($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $for_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
