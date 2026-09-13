// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/1"], $scope._.input_note)));
const $for_content__setup = $for_content__input_note;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>: <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, "b"]);
}));
function $setup($scope) {
	$items($scope, ["a"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $for_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
