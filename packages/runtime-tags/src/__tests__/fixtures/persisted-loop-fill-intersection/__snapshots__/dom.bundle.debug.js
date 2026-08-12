// template.marko
const $template = "<main><ul></ul><button class=add>+</button><button class=inc>c</button></main>";
const $walks = "D b b l";
const $for_content__input_note__OR__count__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/template.marko0", "input_note", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._.input_note + $scope.item + $scope._.count), 2), "#ul/0");
const $for_content__input_note = /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_note__OR__count__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	$for_content__count._($scope);
};
const $for_content__count = /*@__PURE__*/ _resume("__tests__/template.marko_1_count#7/init", /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_note__OR__count__OR__item));
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_note__OR__count__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/6", ($scope) => $for($scope, [$scope.items]));
const $count = /*@__PURE__*/ _let("count/7", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$items($scope, [...$scope.items, "b"]);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
function $setup($scope) {
	$items($scope, ["a"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $for_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
