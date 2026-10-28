// tags/code-block.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b3: "b3;D ;<div> </div>",
	b4: "b4;D ;<span> </span>"
});
var code_block_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_cursor__OR__input_text = _write_if($scope0_reason, 0), $wg__input_text_length = _write_guard($scope0_reason, 3), $cg__input_text = _client_guard($scope0_reason, 2), $cg__input_text_length = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.cursor, !_server_guard($scope0_reason, 1));
	const highlight = _bind_resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b class=${$global$1.theme}>${input.cursor.content((s) => s)}</b>`);
	}, "b0", $scope0_id);
	_if(() => {
		if (input.text.length > 2) {
			const $scope1_id = _scope_id();
			_html(`<div>${_html_resume($scope1_id, "a", highlight(input.text), 1, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</div>`);
			_patch_init_entry($scope1_id, "b1", [_filled_guard($scope0_reason, 2) && ">e", _filled_guard((2 | _mask_group($scope0_reason, 1)) << 1, 0) && ">g"], (2 | _mask_group($scope0_reason, 0)) << 1, 0);
			_scope($scope1_id, { _: ($scope0_page || $wi__input_cursor__OR__input_text) && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<span>${_html_resume($scope2_id, "a", highlight(input.text), 1, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</span>`);
			_patch_init_entry($scope2_id, "b2", [_filled_guard($scope0_reason, 2) && ">e", _filled_guard((2 | _mask_group($scope0_reason, 1)) << 1, 0) && ">g"], (2 | _mask_group($scope0_reason, 0)) << 1, 0);
			_scope($scope2_id, { _: ($scope0_page || $wi__input_cursor__OR__input_text) && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_text_length, 1, 0, 0, ["b3", "b4"], $scope0_reason, 3);
	_fill_global_subscribe("b5", $scope0_id);
	_filled_guard($scope0_reason, 2) && $cg__input_text_length ? _patch_fill($scope0_id, "vb6", input.text) : _client_guard((2 | _mask_group($scope0_reason, 1)) << 1, 0) && _patch_write($scope0_id, "xe", input.text, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1)));
	_filled_guard((2 | _mask_group($scope0_reason, 1)) << 1, 0) && $cg__input_text_length ? _patch_fill($scope0_id, "vb7", highlight) : $cg__input_text && _patch_write($scope0_id, "xg", highlight, !(_filled_guard((2 | _mask_group($scope0_reason, 1)) << 1, 0) && $cg__input_text));
	_scope($scope0_id, {
		d: _unfilled_if($scope0_reason, 0) && input.cursor,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if()) && input.text,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && highlight
	});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "a0")
		}
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
