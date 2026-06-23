// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $tagName_content = _content_resume("__tests__/template.marko_1_content", "Hello World", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $tagName_content);
const $tagName = ($scope, tagName) => $dynamicTag($scope, tagName, () => ({ class: ["a", "b"] }));
const $input = ($scope, input) => $tagName($scope, input.tagName);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
