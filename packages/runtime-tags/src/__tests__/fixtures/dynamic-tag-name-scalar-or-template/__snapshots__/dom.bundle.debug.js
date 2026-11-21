// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input$1 = ($scope, input) => $input_title($scope, input.title);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_count = ($scope, input_count) => $dynamicTag($scope, input_count > 3 || child_default, ($_) => ({ title: "template" }));
const $input = ($scope, input) => $input_count($scope, input.count);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
