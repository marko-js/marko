// tags/list.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1 !b0; b%;<button>clear</button><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		let c = row.content;
		_html(`<button>clear</button>${_el_mark($scope1_id, "a")}`);
		_dynamic_tag($scope1_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
		_script($scope1_id, "b0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b1", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	list_default({ row: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>row ${_text_mark($scope1_id, "a", input.label, $wg__input_label * 2)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0", $wg__input_label);
	}, $scope0_id) }) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a2", "d");
}, 1);
