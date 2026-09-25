// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $tagName_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Hello World");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tagName_content);
const $tagName = ($scope, tagName) => $dynamicTag($scope, tagName, () => ({ class: ["a", "b"] }));
const $input = ($scope, input) => $tagName($scope, input.tagName);
const $renders = [$tagName_content];
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input, $renders);
