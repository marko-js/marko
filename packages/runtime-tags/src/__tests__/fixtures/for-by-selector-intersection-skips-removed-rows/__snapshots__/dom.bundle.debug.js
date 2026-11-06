// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__input_sel = /*@__PURE__*/ _for_selector("#text/0", "input_sel", ($scope) => _attr_class_item($scope["#span/0"], "on", $scope["#LoopKey"] === $scope._.input_sel));
const $for_content__setup = ($scope) => {
	$for_content__input_sel._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<span> </span>", " D ", $for_content__setup);
const $input_flag__OR__input_items = /*@__PURE__*/ _or(5, ($scope) => $for($scope, [$scope.input_flag ? [] : $scope.input_items, "id"]));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_flag__OR__input_items);
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_items($scope, input.items);
	$input_sel($scope, input.sel);
};
const $input_sel = /*@__PURE__*/ _const("input_sel", $for_content__input_sel);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
