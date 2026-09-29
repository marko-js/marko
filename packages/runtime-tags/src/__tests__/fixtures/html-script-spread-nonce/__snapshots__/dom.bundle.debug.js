// template.marko
const $template = "<script>\n  A\n<\/script>";
const $walks = " b";
const $setup = () => {};
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#3", ($scope) => _attrs_script($scope, "#script/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#script/0", {
		nonce: $scope.$global.cspNonce,
		type: "magic",
		...$scope.input_attrs
	});
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
