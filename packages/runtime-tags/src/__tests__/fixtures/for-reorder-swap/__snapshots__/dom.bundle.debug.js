// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $for_content__child_text = ($scope, child_text) => _text($scope["#text/0"], child_text);
const $for_content__$params = ($scope, $params2) => $for_content__child_text($scope, $params2[0]?.text);
const $for = /* @__PURE__ */ _for_of("#div/0", "<span> </span>", "D l", 0, $for_content__$params);
const $input_children = ($scope, input_children) => $for($scope, [input_children, "id"]);
const $input = ($scope, input) => $input_children($scope, input.children);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
