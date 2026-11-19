// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__$params = ($scope, child) => _text($scope["#text/0"], child?.text);
const $for = /*@__PURE__*/ _for_of("#text/0", " ", " ", 0, $for_content__$params);
const $input_children = ($scope, input_children) => $for($scope, [input_children, function(c) {
	return c.id;
}]);
const $input = ($scope, input) => $input_children($scope, input.children);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
