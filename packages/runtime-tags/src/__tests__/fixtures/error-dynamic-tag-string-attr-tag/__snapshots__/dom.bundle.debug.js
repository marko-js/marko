// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $item_content = _content_resume("__tests__/template.marko_1*content", "Hello");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag = ($scope, input_tag) => $dynamicTag($scope, input_tag, ($_) => ({ item: attrTag({ content: $item_content($scope) }) }));
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
