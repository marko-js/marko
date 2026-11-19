// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__$params = ($scope, item) => _text($scope["#text/0"], item?.id);
const $for = /*@__PURE__*/ _for_of("#text/0", " ", " ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, () => "dup"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
