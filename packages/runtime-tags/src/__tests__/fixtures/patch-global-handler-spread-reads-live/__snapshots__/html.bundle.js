// tags/read-button.marko
const $template = "<button>child</button>";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; ;<button>child</button>" });
var read_button_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attrs(input, "a", $scope0_id, "button", 0, $scope0_reason, 0)}>child</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)(" b")};${((_w0) => `${_w0}<output> </output>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let out = "-";
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	read_button_default({ onClick: _resume(function() {
		out = $global$1.brand;
	}, "a0", $scope0_id, 1) });
	_patch_child_end();
	_html(`<output>${_text_mark($scope0_id, "b", out)}</output>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
