// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, $scope.input_v));
const $input$1 = ($scope, input) => $input_v($scope, input.v);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button id=shrink>shrink</button><button id=grow>grow</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b b`)("");
const $for_content__selected = /*@__PURE__*/ _for_selector("#text/2", "selected", ($scope) => _attr_class_item($scope["#span/0"], "on", $scope["#LoopKey"] === $scope._.selected));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#text/2", "<span> </span>", " D ", $for_content__setup);
const $items__OR__r = /*@__PURE__*/ _or(11, ($scope) => $for($scope, [$scope.r ? $scope.items.slice(0, 1) : $scope.items, "id"]), 1, "#scopeOffset/1");
const $items = /*@__PURE__*/ _let("items/8", $items__OR__r);
const $selected = /*@__PURE__*/ _let("selected/9", $for_content__selected);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/3"], "click", function() {
		$items($scope, $scope.items.slice(0, 2));
		$selected($scope, 3);
	});
	_on($scope["#button/4"], "click", function() {
		$items($scope, [...$scope.items, { id: 3 }]);
	});
});
function $setup($scope) {
	_var($scope, "#childScope/0", $r);
	$items($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]);
	$selected($scope, 1);
	$setup__script($scope);
}
const $r = _var_resume("__tests__/template.marko_0_r#10/var", /*@__PURE__*/ _const("r", $items__OR__r));
const $input_short = ($scope, input_short) => $input_v($scope["#childScope/0"], input_short);
const $input = ($scope, input) => $input_short($scope, input.short);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
