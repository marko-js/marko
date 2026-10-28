// tags/frag-host.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b: "b !; ;<section></section>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b1" : "b2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, void 0, $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 2))}`);
	$cg__input_mode && _patch_write($scope0_id, "wg", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "b4");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		g: _unfilled_if($scope0_reason, 2) && frag?.content,
		i: _write_if($scope0_reason, 1) && $input_note__closures
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("b0", $scope0_id) || $cg__input_mode) && _patch_fill($scope0_id, "vb3", input.note, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)(" b")};${((_w0) => `<button>toggle</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "b", 0);
	frag_host_default({
		mode,
		note: input.note
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: mode,
		b: _existing_scope($childScope)
	});
}, 1);
