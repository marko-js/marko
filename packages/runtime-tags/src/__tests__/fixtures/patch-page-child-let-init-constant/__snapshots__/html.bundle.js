// tags/card.marko
_shells({ c: "c;D ;<em> </em>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	d: "d !;b%;<!><!><!>",
	d0: "d0 d4 d5 d6;D l%bD ;<p> </p><!><i> </i>"
});
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 4), $cg__input_more__OR__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	let T = input.tag;
	let f = input.fmt;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", n)}</p>`);
			_dynamic_tag($scope1_id, "b", T, { label: input.label }, 1, 0, 0, 1, (_mask_group($scope0_reason, 5) | _mask_group($scope0_reason, 2)) << 1, 0, "^j");
			_html(`<i>${_text_resume($scope1_id, "c", f(input.label), 1, (_mask_group($scope0_reason, 5) | _mask_group($scope0_reason, 3)) << 1, 0, 1, "^k")}</i>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["d0"], $scope0_reason, 4);
	_filled_guard($scope0_reason, 2) && $cg__input_more__OR__input_label && _patch_write($scope0_id, "wj", T, 1);
	_filled_guard($scope0_reason, 3) && $cg__input_more__OR__input_label && _patch_write($scope0_id, "wk", f, 1);
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vd2", n, 1);
	_scope($scope0_id, {
		h: input.label,
		i: _write_if($scope0_reason, 4) && n,
		j: _unfilled_if($scope0_reason, 0) && T,
		k: _unfilled_if($scope0_reason, 0) && f
	}) || _filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 3)) && _patch_fill($scope0_id, "vd1", input.label, !_server_guard($scope0_reason, 5));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "a0");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		n: 1,
		tag: card_default,
		fmt: wrap,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
