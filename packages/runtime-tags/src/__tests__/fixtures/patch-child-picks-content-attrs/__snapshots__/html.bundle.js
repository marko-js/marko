// tags/pick.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var pick_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_a__OR__input_b__OR__input_title = _write_guard($scope0_reason, 4), $ui__input_on__OR__input_a__OR__input_b__OR__input_title = _unfilled_if($scope0_reason, 4), $ui__input_a__OR__input_b__OR__input_title = _unfilled_if($scope0_reason, 3), $ui__input_on__OR__input_b__OR__input_title = _unfilled_if($scope0_reason, 2), $ui__input_on__OR__input_a__OR__input_title = _unfilled_if($scope0_reason, 1), $ui__input_on__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $fg__input_on = _filled_guard($scope0_reason, 5), $fg__input_a = _filled_guard($scope0_reason, 6), $fg__input_b = _filled_guard($scope0_reason, 7), $fg__input_title = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.on ? input.a : input.b, { title: input.title }, 1, 0, 0, $wg__input_on__OR__input_a__OR__input_b__OR__input_title, $scope0_reason, 4);
	_patch_render($scope0_id, "b0", (($fg__input_on ? " d" : "") + ($fg__input_a ? " e" : "") + ($fg__input_b ? " f" : "") + ($fg__input_title ? " g" : "")).slice(1), $scope0_reason, 4);
	_scope($scope0_id, {
		d: ($ui__input_a__OR__input_b__OR__input_title || $ui__input_on__OR__input_a__OR__input_b__OR__input_title) && input.on,
		e: ($ui__input_on__OR__input_b__OR__input_title || $ui__input_on__OR__input_a__OR__input_b__OR__input_title) && input.a,
		f: ($ui__input_on__OR__input_a__OR__input_title || $ui__input_on__OR__input_a__OR__input_b__OR__input_title) && input.b,
		g: ($ui__input_on__OR__input_a__OR__input_b || $ui__input_on__OR__input_a__OR__input_b__OR__input_title) && input.title
	}) || ($fg__input_on && $ui__input_a__OR__input_b__OR__input_title && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 5)), $fg__input_a && $ui__input_on__OR__input_b__OR__input_title && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 6)), $fg__input_b && $ui__input_on__OR__input_a__OR__input_title && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 7)), $fg__input_title && $ui__input_on__OR__input_a__OR__input_b && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["b>", $setup$1]);
_shells({
	a3: "a3 a1",
	a2: "a2",
	a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>s</button>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 3), $uf__input_on__OR__input_title = _updates_from($scope0_reason, 0), $uf__input_on = _updates_from($scope0_reason, 2), $uf__input_title = _updates_from($scope0_reason, 4), $ui__input_on__OR__input_title = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason($uf__input_on << 1 | $uf__input_on__OR__input_title << 3 | $uf__input_on__OR__input_title << 5 | $uf__input_title << 7 | $uf__input_on__OR__input_title << 9 | $uf__input_on << 11 | $uf__input_title << 17);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	pick_default({
		on: input.on,
		title: input.title,
		a: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "a", input.x, 2, $scope0_reason, 3)}`);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a0", $cg__input_x);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_x && "a0");
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_mark($scope2_id, "a", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: ($ui__input_on__OR__input_title || _unfilled_if($scope0_reason, 3)) && input.x,
		h: s,
		i: _write_if($scope0_reason, 3) && $input_x__closures,
		j: $s__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 3) && $ui__input_on__OR__input_title && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a5", "f");
}, 1);
