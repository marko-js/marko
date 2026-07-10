// template.marko
const $template = "<!----><div></div>";
const $walks = " b b";
const $input_text = /*@__PURE__*/ _const("input_text", ($scope) => _text($scope["#comment/0"], `${_to_text($scope.input_text)}`));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const data = _el_read($scope["#comment/0"]).data;
		_el_read($scope["#div/1"]).textContent = `${data.replace(/>/g, "[GT]")} (length ${data.length})`;
	}
});
const $setup = $setup__script;
const $input = ($scope, input) => $input_text($scope, input.text);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
