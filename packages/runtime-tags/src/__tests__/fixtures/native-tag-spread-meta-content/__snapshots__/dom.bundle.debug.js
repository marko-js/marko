// tags/meta-tag.marko
const $template$1 = "<meta>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_attrs__script = _script("__tests__/tags/meta-tag.marko_0_input_attrs#3", ($scope) => _attrs_script($scope, "#meta/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#meta/0", $scope.input_attrs);
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var meta_tag_default = /*@__PURE__*/ _template("__tests__/tags/meta-tag.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=change>change</button>${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)(" b", " b");
const $description = /*@__PURE__*/ _let("description/3", ($scope) => $input_attrs($scope["#childScope/1"], {
	name: "description",
	content: $scope.description
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$description($scope, $scope.description + "!");
}));
function $setup($scope) {
	$input_attrs($scope["#childScope/2"], {
		name: "static",
		content: "fixed"
	});
	$description($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
