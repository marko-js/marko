// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $item = ($scope, item) => $input_item($scope["#childScope/0"], item);
const $input_title = ($scope, input_title) => $item($scope, { label: input_title });
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/label.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $input_item__script = _script("__tests__/tags/label.marko_0_input_item#2", ($scope) => console.log("run", JSON.stringify($scope.input_item)));
const $input_item = /*@__PURE__*/ _const("input_item", $input_item__script);
const $input = ($scope, input) => $input_item($scope, input.item);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input);
