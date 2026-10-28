// tags/card.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["b1"]];
_shells({ b: "b !b1;b%b ;<!><!><button>+</button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = input.open;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<div");
			_attrs_content(input, "a", $scope1_id, "div", 0);
			_html(`</div>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb3", open, 1);
	_scope($scope0_id, {
		d: input,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input, !_server_guard($scope0_reason, 0)), _content_withhold(input));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		open: input.open,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
			_subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_note);
			$wg__input_note || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: input.note,
		f: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
