// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_id($scope, item?.id);
const $for = /* @__PURE__ */ _for_of("#text/0", " ", " b", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
