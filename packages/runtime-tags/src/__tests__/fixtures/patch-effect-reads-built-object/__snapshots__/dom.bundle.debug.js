// template.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $item__script = _script("__tests__/template.marko_0_item#3", ($scope) => console.log("run", JSON.stringify($scope.item)));
const $item = /*@__PURE__*/ _const("item", $item__script);
const $input_title = ($scope, input_title) => $item($scope, { label: input_title });
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "", "", 0, $input);
