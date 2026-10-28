// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $inputtag_content__setup__script = _script("__tests__/template.marko_1", ($scope) => console.log("body setup"));
const $inputtag_content__setup = $inputtag_content__setup__script;
const $inputtag_content = _content("__tests__/template.marko_1*content", " body", 0, $inputtag_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag = $dynamicTag;
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
