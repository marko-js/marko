// tags/outer.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0 b4;D ;<p> </p>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", f(input.label))}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["b0"], $scope0_reason, 2);
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", f, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 0) && f
	}) || _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 3));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const plain = _resume((v) => "p-" + v, "a0");
	const loud = _resume((v) => "l-" + v, "a1");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 4) << 3 | _mask_group($scope0_reason, 6) << 5 | _mask_group($scope0_reason, 5) << 7);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				fmt: input.alt ? loud : plain,
				label: input.label,
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_init($scope1_id, "a2");
			_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "a3");
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 3);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 3) && input.alt,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.label,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.more,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && plain,
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && loud
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va6", input.alt, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "va8", input.more, !_server_guard($scope0_reason, 6)));
}, 1);
