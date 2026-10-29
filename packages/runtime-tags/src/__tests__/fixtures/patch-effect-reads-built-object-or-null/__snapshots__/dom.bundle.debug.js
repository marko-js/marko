// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $item__script = _script("__tests__/template.marko_0_item#6", ($scope) => {
	_el_read($scope["#output/0"]).textContent = JSON.stringify($scope.item);
	console.log("run", JSON.stringify($scope.item));
});
const $item = /*@__PURE__*/ _const("item", $item__script);
const $input_flag__OR__input_title = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_title", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_flag", /*@__PURE__*/ _or(5, ($scope) => $item($scope, $scope.input_flag ? { t: $scope.input_title } : null))));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_flag__OR__input_title);
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
