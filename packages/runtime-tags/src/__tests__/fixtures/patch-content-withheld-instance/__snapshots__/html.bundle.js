// tags/frag-host.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b: "b;b%;<!><!><!>",
	b3: "b3; ;<section></section>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 1), $wi__input_note__OR__input_mode = _write_if($scope0_reason, 0), $ui__input_mode2 = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_for_of([0, 1], (i) => {
		const $scope1_id = _scope_id(), $ui__input_mode = _unfilled_if($scope0_reason, 2);
		const frag = { content: _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 1)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1", $cg__input_note);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_mode && _scope_with_id($scope1_id) }), $cg__input_note && "b1");
		}, $scope1_id) };
		_html("<section>");
		_attr_content("a", $scope1_id, i || input.mode ? frag.content : null, 0, 1, $scope0_reason, 2);
		_html(`</section>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 2))}`);
		$ui__input_mode && _patch_write($scope1_id, "wc", i, 1);
		$ui__input_mode && _patch_write($scope1_id, "we", frag.content, 1);
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b2");
		_scope($scope1_id, {
			c: $ui__input_mode && i,
			e: $ui__input_mode && frag.content,
			_: $wi__input_note__OR__input_mode && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b3", 0, 0);
	_scope($scope0_id, {
		d: ($ui__input_mode2 || _unfilled_if($scope0_reason, 1)) && input.note,
		f: _write_if($scope0_reason, 1) && $input_note__closures
	}) || _filled_guard($scope0_reason, 1) && $ui__input_mode2 && _patch_write($scope0_id, "xd", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "b4", "d");
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
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
