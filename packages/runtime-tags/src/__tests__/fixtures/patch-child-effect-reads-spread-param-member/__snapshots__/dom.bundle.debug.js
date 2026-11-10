// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $input_props_item = ($scope, input_props_item) => $input_item($scope["#childScope/0"], input_props_item);
const $input = ($scope, input) => $input_props($scope, input.props);
const $input_props = ($scope, input_props) => $input_props_item($scope, input_props?.item);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/label.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $input_item__script = _script("__tests__/tags/label.marko_0_input_item#2", ($scope) => console.log("run", JSON.stringify($scope.input_item)));
const $input_item = /*@__PURE__*/ _const("input_item", $input_item__script);
const $input = ($scope, input) => $input_item($scope, input.item);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input);
