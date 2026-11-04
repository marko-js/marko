// tags/card.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["b1"]];
_shells({ b: "b !b1;b%b ;<!><!><button>+</button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = input.open;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, { x: 1 }, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		f: input.content,
		g: open
	}) || $fg__input_content && _patch_write($scope0_id, "xf", input.content, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $cg__input_note = _client_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		open: input.open,
		content: _content_resume("a1", ({ x }) => {
			const $scope1_reason = _scope_reason(), $wg__x = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", x, $wg__x)}:${_text_mark($scope1_id, "b", input.note, $wg__input_note * 2)}</em>`);
			$cg__input_note && _patch_render($scope1_id, "a0");
			_subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_note && "a0", $wg__input_note || $wg__x);
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: input.note,
		f: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
