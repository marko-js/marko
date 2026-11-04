// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", ($scope) => _attr_class_item($scope["#li/0"], "sel", $scope._._.selected === $scope["#LoopKey"]), ($scope) => $scope._);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#li/0"], "click", function() {
	$selected($scope._._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__setup__script($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", " D ", $for_content__setup);
const $if_content__rows = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.rows, "id"]));
const $if_content__setup = ($scope) => {
	$if_content__rows._($scope);
	$if_content__selected._($scope);
};
const $if_content__selected = /*@__PURE__*/ _if_closure("#text/0", 0, $for_content__selected);
const $rows = _let("rows/6", ($scope) => {
	$rows_length($scope, $scope.rows?.length);
	$if_content__rows($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const("rows_length", ($scope) => $if($scope, $scope.rows_length ? 0 : 1));
function $setup($scope) {
	$rows($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]);
}
const $selected = /*@__PURE__*/ _fill_let_change("__tests__/template.marko_0_selected#8/fill", "selected/8", $if_content__selected);
const $input_selected__OR__input_selectedChange = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_selected#3_input_selectedChange#4/setup", 5, ($scope) => $selected($scope, $scope.input_selected, $scope.input_selectedChange));
const $input_selected = /*@__PURE__*/ _const("input_selected", $input_selected__OR__input_selectedChange);
const $input_selectedChange = /*@__PURE__*/ _const("input_selectedChange", $input_selected__OR__input_selectedChange);
const $input = ($scope, input) => {
	$input_selected($scope, input.selected);
	$input_selectedChange($scope, input.selectedChange);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
