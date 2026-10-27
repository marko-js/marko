// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = ($_) => {};
const $input_flag__OR__input_title = /*@__PURE__*/ _or(5, ($scope) => $input_item($scope["#childScope/0"], $scope.input_flag && { t: $scope.input_title }));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_flag__OR__input_title);
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $input_item__script = _script("__tests__/tags/child.marko_0_input_item#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = JSON.stringify($scope.input_item);
	console.log("run", JSON.stringify($scope.input_item));
});
const $input_item = /*@__PURE__*/ _const("input_item", $input_item__script);
const $input = ($scope, input) => $input_item($scope, input.item);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, " b", 0, $input);
