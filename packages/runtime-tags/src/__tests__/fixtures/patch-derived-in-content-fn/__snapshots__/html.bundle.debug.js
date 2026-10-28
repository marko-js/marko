// tags/reader.marko
const $template$2 = "<button>read</button>";
const $walks$2 = " b";
const $setup$2 = [[], ["__tests__/tags/reader.marko_0"]];
_shells({ "__tests__/tags/reader.marko": "__tests__/tags/reader.marko !__tests__/tags/reader.marko_0; ;<button>read</button>" });
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>read</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/reader.marko", 0, { input: 0 }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input", input, !_server_guard($scope0_reason, 0));
});

// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("D%l")};${((_w0) => `${_w0}<p> </p>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let shown = "";
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope0_reason, 0));
		_set_scope_reason(($scope0_page ? _mask_group($scope0_reason, 0) : 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		reader_default(_patch_live($childScope, {
			read: _bind_resume(() => label, "__tests__/template.marko_1/read", $scope1_id),
			onRead: _resume(function(value) {
				shown = value;
			}, "__tests__/template.marko_1/onRead", $scope1_id)
		}, $scope1_id, "label"));
		_patch_child_end();
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			label,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { label: "3:10" }), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:4/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/1", shown)}</p>`);
	_scope($scope0_id, {
		"ClosureScopes:input_label/6": _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
