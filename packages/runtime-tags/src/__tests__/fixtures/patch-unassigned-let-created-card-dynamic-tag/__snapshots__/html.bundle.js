// tags/card.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	_dynamic_tag($scope0_id, "a", k ? "b" : "i", {}, 0, _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.w, $wg__input_w));
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_w);
		$wg__input_w || _resume_branch($scope1_id);
	}, $scope0_id));
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", k, 1);
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.w, !_server_guard($scope0_reason, 1)), _content_withhold(input.n));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({
				n: input.n,
				w: input.w
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va3", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "va4", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
