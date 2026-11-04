// tags/pick.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var pick_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_a__OR__input_b__OR__input_title = _write_guard($scope0_reason, 4), $fg__input_on = _filled_guard($scope0_reason, 5), $fg__input_a = _filled_guard($scope0_reason, 6), $fg__input_b = _filled_guard($scope0_reason, 7), $fg__input_title = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.on ? input.a : input.b, { title: input.title }, 1, 0, 0, $wg__input_on__OR__input_a__OR__input_b__OR__input_title, $scope0_reason, 4);
	_patch_render($scope0_id, "b0", [
		$fg__input_on && "d",
		$fg__input_a && "e",
		$fg__input_b && "f",
		$fg__input_title && "g"
	], $scope0_reason, 4);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.on,
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 4)) && input.b,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.title
	}) || ($fg__input_on && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 5)), $fg__input_a && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 6)), $fg__input_b && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 7)), $fg__input_title && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["b>", $setup$1]);
_shells({
	a2: "a2 a6",
	a1: "a1",
	a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>s</button>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 4) << 7 | _updates_from($scope0_reason, 0) << 9 | _updates_from($scope0_reason, 2) << 11 | _updates_from($scope0_reason, 4) << 17);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	pick_default({
		on: input.on,
		title: input.title,
		a: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "a", input.x, 2, $scope0_reason, 3)}`);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a0", _client_guard($scope0_reason, 3));
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_mark($scope2_id, "a", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a3");
	$fg__input_x && _patch_subscribers($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.x,
		h: s,
		i: _write_if($scope0_reason, 3) && $input_x__closures,
		j: $s__closures,
		b: _existing_scope($childScope)
	}) || $fg__input_x && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 3));
}, 1);
