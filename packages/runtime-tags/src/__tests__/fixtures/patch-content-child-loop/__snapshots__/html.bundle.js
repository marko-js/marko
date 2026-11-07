// tags/card/index.marko
const $template = "<ul></ul>";
const $setup$1 = [[], []];
_shells({
	b: "b; ;<ul></ul>",
	b1: "b1;D%b%;<li><!><!></li>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.count, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", i, 1, $scope0_reason, 0)}`);
		_dynamic_tag($scope1_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
		_html("</li>");
		_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b1", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	$fg__input_content && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content }) || $fg__input_content && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;D ;<em> </em>",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 2), $fg__input_note = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		count: input.count,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a0", $cg__input_note);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_note && "a0");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_note && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2));
}, 1);
