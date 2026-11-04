// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = ($_) => {};
const $input_title = ($scope, input_title) => $input_item($scope["#childScope/0"], { label: input_title });
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $input_item_label__script = _script_patch("__tests__/tags/child.marko_0_input_item_label#4 input_item_label", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.input_item_label;
	console.log("run", $scope.input_item_label);
});
const $input_item_label = /*@__PURE__*/ _const("input_item_label", $input_item_label__script);
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => $input_item_label($scope, input_item?.label);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, " b", 0, $input);
