// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/1"], $scope._.input_note)));
const $for_content__setup = $for_content__input_note;
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>: <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [{ id: $scope.items?.length + 1 }, ...$scope.items]);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }, { id: 2 }]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $for_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
