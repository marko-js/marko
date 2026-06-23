// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__child_text = ($scope, child_text) => _text($scope["#text/0"], child_text);
const $for_content__$params = ($scope, $params2) => $for_content__child($scope, $params2[0]);
const $for_content__child = ($scope, child) => $for_content__child_text($scope, child?.text);
const $for = /* @__PURE__ */ _for_of("#text/0", " ", " b", 0, $for_content__$params);
const $input_children = ($scope, input_children) => $for($scope, [input_children, function(c) {
	return c.id;
}]);
const $input = ($scope, input) => $input_children($scope, input.children);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
