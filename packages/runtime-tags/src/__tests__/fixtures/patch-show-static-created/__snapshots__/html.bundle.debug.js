// tags/hidden-note.marko
const $template$1 = "<!><b> </b><!><!>";
const $walks$1 = "bD l%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/hidden-note.marko": "__tests__/tags/hidden-note.marko;bD l%;<!><b> </b><!><!>" });
var hidden_note_default = _template("__tests__/tags/hidden-note.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_show_start(false, 0);
	_html(`<b>${_text_mark($scope0_id, "#text/0", input.text, 1, $scope0_reason, 0)}</b>`);
	_show_end($scope0_id, "#text/1", false, 0, 0, 0, 1, 1, 0, 0);
	_scope($scope0_id, {}, "__tests__/tags/hidden-note.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&%c`)($walks$1)};${((_w0) => `<!>${_w0}<!><!>`)($template$1)}`,
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/7>", $setup$1])};${/*@__PURE__*/ ((_w0) => `D l%bD lc%b E mb%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<p> </p><!><b> </b> <i>range</i><!><div><em> </em></div><s>single</s><!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	hidden_note_default({ text: input.label });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}</p>`);
			_show_start(false, 0);
			_html(`<b>${_text_mark($scope1_id, "#text/2", input.label, 1, $scope0_reason, 0)}</b> <i>range</i>`);
			_show_end($scope1_id, "#text/3", false, 0, 1, 0, 0, 1, 0, 0, "#text/1");
			_html("<div>");
			_show_start(false, 0);
			_html(`<em>${_text_mark($scope1_id, "#text/5", input.label, 1, $scope0_reason, 0)}</em>`);
			_show_end($scope1_id, "#div/4", false, 0, 0, 0, 1, 1, 0, 0);
			_html("</div>");
			_show_start(false, 0);
			_html("<s>single</s>");
			_show_end($scope1_id, "#text/6", false, 0, 0, 0, 1, 1, 0, 0);
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/7", 1);
			hidden_note_default({ text: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/7": _existing_scope($childScope2)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
