// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $for_content__input_selected = /*@__PURE__*/ _for_selector_patch("__tests__/template.marko_2_input_selected#0:4/setup", "#ul/0", "input_selected", ($scope) => _text($scope["#text/1"], $scope._._.input_selected === $scope["#LoopKey"] ? "*" : ""), ($scope) => $scope._);
const $for_content__setup = ($scope) => {
	$for_content__input_selected._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $if_content__input_selected = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_selected#0:4/setup", "#text/0", 0, $for_content__input_selected);
const $if_content__setup = ($scope) => {
	$if_content__input_selected._($scope);
	$if_content__rows._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup);
const $if_content__rows = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.rows, "id"]));
const $rows = _let("rows/5", ($scope) => {
	$rows_length($scope, $scope.rows?.length);
	$if_content__rows($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const("rows_length", ($scope) => $if($scope, $scope.rows_length ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$rows($scope, [...$scope.rows, { id: $scope.rows.length + 1 }]);
}));
function $setup($scope) {
	$rows($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_selected($scope, input.selected);
const $input_selected = /*@__PURE__*/ _const("input_selected", $if_content__input_selected);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
