// tags/toggle-if.marko
const $template$6 = "<!><!><!>";
const $walks$6 = "b%c";
const $setup$6 = [[], []];
_shells({
	"__tests__/tags/toggle-if.marko": "__tests__/tags/toggle-if.marko !;b%;<!><!><!>",
	"__tests__/tags/toggle-if.marko_1*shell": "__tests__/tags/toggle-if.marko_1*shell;b%;<!><!><!>"
});
var toggle_if_default = _template("__tests__/tags/toggle-if.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/toggle-if.marko_1_input_content#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle-if.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, 1, 0, 0, ["__tests__/tags/toggle-if.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/toggle-if.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle-if.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// tags/toggle-for.marko
const $template$5 = "<!><!><!>";
const $walks$5 = "b%c";
const $setup$5 = [[], []];
_shells({
	"__tests__/tags/toggle-for.marko": "__tests__/tags/toggle-for.marko !;b%;<!><!><!>",
	"__tests__/tags/toggle-for.marko_1*shell": "__tests__/tags/toggle-for.marko_1*shell;b%;<!><!><!>"
});
var toggle_for_default = _template("__tests__/tags/toggle-for.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_until(input.open ? 1 : 0, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/toggle-for.marko_1_input_content#0:4/init");
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle-for.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/toggle-for.marko_1*shell", $scope0_reason, 1);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/toggle-for.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle-for.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// tags/toggle-tag.marko
const $template$4 = "<!><!><!>";
const $walks$4 = "b%c";
const $setup$4 = [[], []];
_shells({
	"__tests__/tags/toggle-tag.marko_1*content": "__tests__/tags/toggle-tag.marko_1*content;b%;<!><!><!>",
	"~__tests__/tags/toggle-tag.marko_1*content": "~__tests__/tags/toggle-tag.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/toggle-tag.marko": "__tests__/tags/toggle-tag.marko !;b%;<!><!><!>"
});
var toggle_tag_default = _template("__tests__/tags/toggle-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_open__OR__input_content = _write_if($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.open ? "div" : "section", {}, 10, _content("__tests__/tags/toggle-tag.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/toggle-tag.marko_1_input_content#0:4/init" : "__tests__/tags/toggle-tag.marko_1_input_content#0:4/subscribe");
		$wi__input_open__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/toggle-tag.marko", "1:4"));
		$wg__input_content || $wi__input_open__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id, 1), 0, $wg__input_open, $scope0_reason, 1);
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		"ClosureScopes:input_content/5": _write_if($scope0_reason, 2) && $input_content__closures
	}, "__tests__/tags/toggle-tag.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle-tag.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// tags/param-host.marko
const $template$3 = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$6, $template$5, $template$4);
const $walks$3 = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $setup$3 = _shell_setup([[], []], ["#childScope/0>", $setup$6], ["#childScope/1>", $setup$5], ["#childScope/2>", $setup$4]);
_shells({
	"__tests__/tags/param-host.marko_4*content": "__tests__/tags/param-host.marko_4*content;Db%;<p>own <!></p>",
	"~__tests__/tags/param-host.marko_4*content": "~__tests__/tags/param-host.marko_4*content;Db%;<p>own <!></p>",
	"__tests__/tags/param-host.marko_3*content": "__tests__/tags/param-host.marko_3*content;Db%;<p>tag <!></p>",
	"__tests__/tags/param-host.marko_2*content": "__tests__/tags/param-host.marko_2*content;Db%;<p>for <!></p>",
	"__tests__/tags/param-host.marko_1*content": "__tests__/tags/param-host.marko_1*content;Db%;<p>if <!></p>",
	"__tests__/tags/param-host.marko": /*@__PURE__*/ (() => `__tests__/tags/param-host.marko${_shell_marker($setup$3)};${((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c")};${((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$6, $template$5, $template$4)}`)()
});
var param_host_default = _template("__tests__/tags/param-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_open__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	toggle_if_default({
		open: input.open,
		content: _content_resume("__tests__/tags/param-host.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>if ${_text_resume($scope1_id, "#text/0", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_label ? "__tests__/tags/param-host.marko_1_input_label#0:7/init" : "__tests__/tags/param-host.marko_1_input_label#0:7/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: $wi__input_open__OR__input_label && _scope_with_id($scope0_id) }, "__tests__/tags/param-host.marko", "1:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	toggle_for_default({
		open: input.open,
		content: _content_resume("__tests__/tags/param-host.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>for ${_text_resume($scope2_id, "#text/0", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "__tests__/tags/param-host.marko_2_input_label#0:7/init" : "__tests__/tags/param-host.marko_2_input_label#0:7/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
				_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/8": $wi__input_label && 1
			}, "__tests__/tags/param-host.marko", "4:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/2", 2);
	toggle_tag_default({
		open: input.open,
		content: _content_resume("__tests__/tags/param-host.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>tag ${_text_resume($scope3_id, "#text/0", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_label ? "__tests__/tags/param-host.marko_3_input_label#0:7/init" : "__tests__/tags/param-host.marko_3_input_label#0:7/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, {
				_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/8": $wi__input_label && 2
			}, "__tests__/tags/param-host.marko", "7:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/3", input.open ? "div" : "section", {}, 26, _content("__tests__/tags/param-host.marko_4*content", () => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html(`<p>own ${_text_resume($scope4_id, "#text/0", input.label, 2, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope4_id, $cg__input_label ? "__tests__/tags/param-host.marko_4_input_label#0:7/init" : "__tests__/tags/param-host.marko_4_input_label#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope4_id, {
			_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/8": $wi__input_label && 3
		}, "__tests__/tags/param-host.marko", "10:4"));
	}, $scope0_id, 1), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/2": _existing_scope($childScope3)
	}, "__tests__/tags/param-host.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/param-host.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
});

// tags/outer.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$3);
const $setup$2 = _shell_setup([[], []], ["#childScope/0>", $setup$3]);
_shells({ "__tests__/tags/outer.marko": /*@__PURE__*/ (() => `__tests__/tags/outer.marko${_shell_marker($setup$2)};${((_w0) => `b/${_w0}&b`)($walks$3)};${((_w0) => `<!>${_w0}<!>`)($template$3)}`)() });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	param_host_default({
		open: input.open,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
});

// tags/define-host.marko
const $Sel_content__walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $Sel_content__template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$6, $template$5, $template$4);
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Sel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Sel_content__walks);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", [[""], []]], ["#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$6], ["#childScope/1>", $setup$5], ["#childScope/2>", $setup$4])]);
_shells({
	"__tests__/tags/define-host.marko_5*content": "__tests__/tags/define-host.marko_5*content;Db%;<p>own <!></p>",
	"~__tests__/tags/define-host.marko_5*content": "~__tests__/tags/define-host.marko_5*content;Db%;<p>own <!></p>",
	"__tests__/tags/define-host.marko_4*content": "__tests__/tags/define-host.marko_4*content;Db%;<p>tag <!></p>",
	"__tests__/tags/define-host.marko_3*content": "__tests__/tags/define-host.marko_3*content;Db%;<p>for <!></p>",
	"__tests__/tags/define-host.marko_2*content": "__tests__/tags/define-host.marko_2*content;Db%;<p>if <!></p>",
	"__tests__/tags/define-host.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/define-host.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$6], ["#childScope/1>", $setup$5], ["#childScope/2>", $setup$4]))};${_w0};${_w1}`)($Sel_content__walks, $Sel_content__template),
	"~__tests__/tags/define-host.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `~__tests__/tags/define-host.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$6], ["#childScope/1>", $setup$5], ["#childScope/2>", $setup$4]))};${_w0};${_w1}`)($Sel_content__walks, $Sel_content__template),
	"__tests__/tags/define-host.marko": /*@__PURE__*/ (() => `__tests__/tags/define-host.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)($Sel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Sel_content__template)}`)()
});
var define_host_default = _template("__tests__/tags/define-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Sel = { content: _content("__tests__/tags/define-host.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__open = _write_if($scope1_reason, 0);
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1 | _mask_group($scope1_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		toggle_if_default({
			open,
			content: _content_resume("__tests__/tags/define-host.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>if ${_text_resume($scope2_id, "#text/0", input.label, 2, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_label ? "__tests__/tags/define-host.marko_2_input_label#0:3/init" : "__tests__/tags/define-host.marko_2_input_label#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: ($wi__input_label || $wi__open) && _scope_with_id($scope1_id) }, "__tests__/tags/define-host.marko", "2:4"));
			}, $scope1_id)
		});
		_patch_child_end();
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1 | _mask_group($scope1_reason, 0) << 3);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
		toggle_for_default({
			open,
			content: _content_resume("__tests__/tags/define-host.marko_3*content", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>for ${_text_resume($scope3_id, "#text/0", input.label, 2, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_label ? "__tests__/tags/define-host.marko_3_input_label#0:3/init" : "__tests__/tags/define-host.marko_3_input_label#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
					_: ($wi__input_label || $wi__open) && _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 1
				}, "__tests__/tags/define-host.marko", "5:4"));
			}, $scope1_id)
		});
		_patch_child_end();
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1 | _mask_group($scope1_reason, 0) << 3);
		const $childScope3 = _peek_scope_id($scope1_id, "#childScope/2", 2);
		toggle_tag_default({
			open,
			content: _content_resume("__tests__/tags/define-host.marko_4*content", () => {
				const $scope4_reason = _scope_reason();
				const $scope4_id = _scope_id();
				_html(`<p>tag ${_text_resume($scope4_id, "#text/0", input.label, 2, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope4_id, $cg__input_label ? "__tests__/tags/define-host.marko_4_input_label#0:3/init" : "__tests__/tags/define-host.marko_4_input_label#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope4_id, {
					_: ($wi__input_label || $wi__open) && _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 2
				}, "__tests__/tags/define-host.marko", "8:4"));
			}, $scope1_id)
		});
		_patch_child_end();
		_dynamic_tag($scope1_id, "#text/3", open ? "div" : "section", {}, 26, _content("__tests__/tags/define-host.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			_html(`<p>own ${_text_resume($scope5_id, "#text/0", input.label, 2, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope5_id, $cg__input_label ? "__tests__/tags/define-host.marko_5_input_label#0:3/init" : "__tests__/tags/define-host.marko_5_input_label#0:3/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope5_id, {
				_: ($wi__input_label || $wi__open) && _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_label/5": $wi__input_label && 3
			}, "__tests__/tags/define-host.marko", "11:6"));
		}, $scope1_id, 1), 0, _write_guard($scope1_reason, 0), $scope1_reason, 0);
		_scope($scope1_id, {
			_: ($wi__input_label || $wi__open) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope),
			"#childScope/1": _existing_scope($childScope2),
			"#childScope/2": _existing_scope($childScope3)
		}, "__tests__/tags/define-host.marko", "1:2");
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope4 = _peek_scope_id($scope0_id, "#childScope/0", 4);
	Sel.content({ open: input.open });
	_patch_child_end();
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope4)
	}, "__tests__/tags/define-host.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/define-host.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$2, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$2], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$2, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($template$2, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		open,
		label: input.label
	});
	_patch_child_end();
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	define_host_default({
		open,
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
