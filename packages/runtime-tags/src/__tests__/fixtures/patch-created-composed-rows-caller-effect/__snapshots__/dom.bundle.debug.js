// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__item_name = ($scope, item_name) => $input_label($scope["#childScope/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/probe.marko
const $template = "<p>probe</p>";
const $walks = "b";
const $setup = ($_) => {};
const $input_label__script = _script("__tests__/tags/probe.marko_0_input_label#2", ($scope) => console.log("probe", $scope.input_label));
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__script);
const $input = ($scope, input) => $input_label($scope, input.label);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template, "b", 0, $input);
