// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $for_content__child_text = ($scope, child_text) => _text($scope["#text/0"], child_text);
const $for_content__$params = ($scope, $params2) => $for_content__child($scope, $params2[0]);
const $for_content__child = ($scope, child) => $for_content__child_text($scope, child?.text);
const $for = /* @__PURE__ */ _for_of("#div/0", " ", " b", 0, $for_content__$params);
const $children = ($scope, children) => $for($scope, [children, function(c) {
	return c.id;
}]);
const $input = ($scope, input) => $children($scope, input.children);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
