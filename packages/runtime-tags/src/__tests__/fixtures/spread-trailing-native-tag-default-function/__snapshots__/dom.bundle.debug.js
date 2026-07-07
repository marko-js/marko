// template.marko
const $template = "<button></button>";
const $walks = " b";
const $setup = () => {};
const $rest__script = _script("__tests__/template.marko_0_rest", ($scope) => _attrs_script($scope, "#button/0"));
const $rest = /*@__PURE__*/ _const("rest", ($scope) => {
	_attrs_content($scope, "#button/0", {
		onClick: $onClick,
		...$scope.rest
	});
	$rest__script($scope);
});
const $input = ($scope, input) => (({ onClick, ...rest }) => $rest($scope, rest))(input);
function $onClick(_, el) {
	el.textContent = "clicked";
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
