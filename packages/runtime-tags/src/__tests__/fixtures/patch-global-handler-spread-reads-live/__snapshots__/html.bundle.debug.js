// tags/read-button.marko
const $template$1 = "<button>child</button>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/read-button.marko_0_input#2"]];
_shells({ "__tests__/tags/read-button.marko": "__tests__/tags/read-button.marko !__tests__/tags/read-button.marko_0_input#2; ;<button>child</button>" });
var read_button_default = _template("__tests__/tags/read-button.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attrs(input, "#button/0", $scope0_id, "button", 0, $scope0_reason, 0)}>child</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/read-button.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/tags/read-button.marko", 0, { "EventAttributes:#button/0": ["...input", "1:12"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<output> </output>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)(" b")};${((_w0) => `${_w0}<output> </output>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let out = "-";
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	read_button_default({ onClick: _resume(function() {
		out = $global$1.brand;
	}, "__tests__/template.marko_0/onClick", $scope0_id, 1) });
	_patch_child_end();
	_html(`<output>${_text_mark($scope0_id, "#text/1", out)}</output>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
