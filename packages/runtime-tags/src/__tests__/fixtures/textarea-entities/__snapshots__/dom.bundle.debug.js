// template.marko
const $template = "<textarea id=body></textarea><textarea id=mixed></textarea><textarea id=quasi></textarea><p id=text>&lt;p&gt;hi &amp; &copy;</p>";
const $walks = " b b c";
function $setup($scope) {
	_attr_input_value_default($scope, "#textarea/0", "<p>hi & <b> ©");
}
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	_attr_input_value_default($scope, "#textarea/1", `&start ${$scope.input_v} &end`);
	_attr_input_value_default($scope, "#textarea/2", `pre&mid-${$scope.input_v}-post&end`);
});
const $input = ($scope, input) => $input_v($scope, input.v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
