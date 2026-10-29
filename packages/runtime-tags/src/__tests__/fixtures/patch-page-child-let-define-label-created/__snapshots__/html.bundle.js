// tags/outer.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0 b2;D%;<section><!></section>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
	_first_value($scope0_id, "f", value, $scope0_reason, 0);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", value.content, {}, 2, 0, 0, 1, $scope0_reason, 0, "^f");
			_html("</section>");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["b0"], $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", value?.content, 1);
	_scope($scope0_id, { g: _unfilled_if($scope0_reason, 1) && value?.content });
	$wg__input_more || _write_if($scope0_reason, 1) && _resume_branch($scope0_id);
});

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 3)}</em>`);
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 5) << 3);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			outer_default({
				data: _patch_live($childScope, { content: Body.content }, $scope2_id, ""),
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_init($scope2_id, "a2");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 5) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 4);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.more,
		h: _unfilled_if($scope0_reason, 4) && Body?.content,
		i: _write_if($scope0_reason, 3) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && (_content_withheld("a0", $scope0_id) || _client_guard($scope0_reason, 1)) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va5", input.more, !_server_guard($scope0_reason, 5)));
}, 1);
