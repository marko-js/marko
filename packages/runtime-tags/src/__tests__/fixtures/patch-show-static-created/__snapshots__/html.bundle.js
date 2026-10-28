// tags/hidden-note.marko
const $template = "<!><!><b> </b><!><!>";
const $walks = "b%bD l%c";
const $setup$1 = [[], []];
_shells({ b: "b;b%bD l%;<!><!><b> </b><!><!>" });
var hidden_note_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_show_start(false, 0);
	_html(`<b>${_text_resume($scope0_id, "b", input.text, 1, $scope0_reason, 0)}</b>`);
	_show_end($scope0_id, "c", false, 0, 0, 0, 1, 2, 0, void 0, 0, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&%c`)($walks)};${((_w0) => `<!>${_w0}<!><!>`)($template)}`)(),
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["j>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D l%bD lc%b%b E m%c%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<p> </p><!><b> </b> <i>range</i><!><!><div><em> </em></div><!><s>single</s><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	hidden_note_default({ text: input.label });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
			_show_start(false, 0);
			_html(`<b>${_text_resume($scope1_id, "c", input.label, 1, $scope0_reason, 0)}</b> <i>range</i>`);
			_show_end($scope1_id, "e", false, 0, 1, 0, 0, 4, 1, 3, 0, 0);
			_html("<div>");
			_show_start(false, 0);
			_html(`<em>${_text_resume($scope1_id, "g", input.label, 1, $scope0_reason, 0)}</em>`);
			_show_end($scope1_id, "f", false, 0, 0, 0, 1, 5, void 0, void 0, 0, 0);
			_html("</div>");
			_show_start(false, 0);
			_html("<s>single</s>");
			_show_end($scope1_id, "i", false, 0, 0, 0, 1, 8, 7, void 0, 0, 0);
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "j", 1);
			hidden_note_default({ text: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				j: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0));
}, 1);
