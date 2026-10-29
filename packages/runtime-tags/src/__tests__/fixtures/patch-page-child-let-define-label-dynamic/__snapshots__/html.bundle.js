// tags/wrap.marko
_shells({ c: "c;D%;<div><!></div>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0 b3;D%;<section><!></section>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", value.content, {});
			_html("</section>");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["b0"], $scope0_reason, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", value, 1);
	_scope($scope0_id, { g: $wi__input_more && value?.content }) || _content_withhold(input.data);
	$wg__input_more || $wi__input_more && _resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&%c`)("b%c")};${((_w0) => `<!>${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		data: _patch_live($childScope, { content: Body.content }, $scope0_id, ""),
		more: input.more
	});
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", input.wrap && wrap_default, { content: Body.content }, 9, 0, 0, _write_guard($scope0_reason, 4), $scope0_reason, 4);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: _unfilled_if($scope0_reason, 4) && Body?.content,
		k: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
