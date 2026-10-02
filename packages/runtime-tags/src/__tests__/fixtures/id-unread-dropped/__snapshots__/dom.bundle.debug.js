// template.marko
const $template = "<label>name</label><input>";
const $walks = " b b";
const $used = ($scope, used) => {
	_attr($scope["#label/0"], "for", used);
	_attr($scope["#input/1"], "id", used);
};
function $setup($scope) {
	$used($scope, _id($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
