// tags/row.marko
const $template$1 = "<li><span> </span><button>Pick</button></li>";
const $walks$1 = "E l l";
const $setup$1 = ($_) => {};
const $input_item_name = ($scope, input_item_name) => _text($scope["#text/0"], input_item_name);
const $input_onPick__script = _script("__tests__/tags/row.marko_0_input_onPick#6", ($scope) => _on($scope["#button/1"], "click", $scope.input_onPick));
const $input_onPick = /*@__PURE__*/ _const("input_onPick", $input_onPick__script);
const $input$1 = ($scope, input) => {
	$input_onPick($scope, input.onPick);
	$input_item($scope, input.item);
};
const $input_item = ($scope, input_item) => $input_item_name($scope, input_item?.name);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<output> </output><ul></ul>";
const $walks = "D l b";
const $for_content__item = ($scope, item) => $input_item($scope["#childScope/0"], item);
const $for_content__setup = ($scope) => $input_onPick($scope["#childScope/0"], $onPick($scope));
const $for_content__$params = ($scope, $params2) => {
	$for_content__item($scope, $params2[0]);
	$for_content__i($scope, $params2[1]);
};
const $for_content__i = /*@__PURE__*/ _const("i");
const $selected = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "selected/5", ($scope) => _text($scope["#text/0"], $scope.selected));
function $setup($scope) {
	$selected($scope, -1);
}
const $for = /*@__PURE__*/ _for_of("#ul/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
const $onPick = ($scope) => function() {
	$selected($scope._, $scope._.selected + $scope.i + 10);
};
_resumed["__tests__/template.marko_1/onPick"] = $onPick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
