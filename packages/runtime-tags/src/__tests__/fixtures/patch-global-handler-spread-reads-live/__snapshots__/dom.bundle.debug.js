// tags/read-button.marko
const $template$1 = "<button>child</button>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/read-button.marko_0_input#2", ($scope) => _attrs_script($scope, "#button/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input__script($scope);
	_attrs($scope, "#button/0", $scope.input);
});
var read_button_default = /*@__PURE__*/ _template("__tests__/tags/read-button.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<output> </output>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $out = _let("out/2", ($scope) => _text($scope["#text/1"], $scope.out));
function $setup($scope) {
	$input($scope["#childScope/0"], { onClick: $onClick($scope) });
	$out($scope, "-");
}
const $onClick = ($scope) => function() {
	$out($scope, $scope.$global.brand);
};
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
