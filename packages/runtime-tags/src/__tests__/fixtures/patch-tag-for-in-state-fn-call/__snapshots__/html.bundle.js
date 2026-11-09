// tags/card.marko
const $template = "<!><!><button class=s>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["b8"]];
_shells({
	b: "b !b8;b%b ;<!><!><button class=s>+</button>",
	b5: "b5;b%;<!><!><!>",
	b4: "b4 b3;D ;<span> </span>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 3), $cg__input_sel = _client_guard($scope0_reason, 3), $sg__input_prefix = _server_guard($scope0_reason, 1), $fg__input_prefix = _filled_guard($scope0_reason, 1), $fg__input_sel = _filled_guard($scope0_reason, 3), $cg__input_obj = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $s__closures = /* @__PURE__ */ new Set();
	const $fmt2__closures = /* @__PURE__ */ new Set();
	$fg__input_prefix && _patch_write($scope0_id, "xe", input.prefix, !$sg__input_prefix);
	let s = 0;
	const fmt = _bind_resume((v) => input.prefix + v, "b0", $scope0_id);
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xe", v, !_server_guard($scope0_reason, 2));
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", fmt(v + s))}</span>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1");
				_patch_render($scope2_id, "b2", [
					_filled_guard($scope0_reason, 1) && ">>i",
					_filled_guard($scope0_reason, 1) && ">>e",
					_filled_guard($scope0_reason, 2) && ">e"
				]);
				_subscribe(_unfilled_if($scope0_reason, 1) && $fmt2__closures, _subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b3"), _client_guard($scope0_reason, 1) && "b1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_sel, 1, 0, 0, ["b4"], $scope0_reason, 0);
		_filled_guard($scope0_reason, 2) && $cg__input_sel && _patch_render($scope1_id, "b6", "e");
		$cg__input_sel && _patch_render($scope1_id, "b7");
		_scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 3) && k,
			e: v,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b5", $scope0_reason, 2);
	_html(`<button class=s>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b8");
	$fg__input_sel && $cg__input_obj && _patch_render($scope0_id, "b7", "g");
	$fg__input_prefix && ($cg__input_obj || $cg__input_sel) && _patch_subscribers($scope0_id, "b9", ["i", "e"]);
	_patch_fill($scope0_id, "vb10", s, 1);
	_scope($scope0_id, {
		e: input.prefix,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.sel,
		h: s,
		i: fmt,
		k: $s__closures,
		l: _write_if($scope0_reason, 1) && $fmt2__closures
	}) || ($fg__input_sel && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.sel, !_server_guard($scope0_reason, 3)), $fg__input_prefix && _patch_write($scope0_id, "xi", fmt, !$sg__input_prefix));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button class=p>p</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_dyn = _filled_guard($scope0_reason, 3), $fg__input_prefix = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let pre = "a";
	_set_scope_reason(24 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		obj: input.obj,
		sel: input.sel,
		prefix: input.dyn ? pre : input.prefix
	});
	_patch_child_end();
	_html(`<button class=p>p</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", [$fg__input_dyn && "g", $fg__input_prefix && "h"]);
	_scope($scope0_id, {
		g: input.dyn,
		h: input.prefix,
		i: pre,
		a: _existing_scope($childScope)
	}) || ($fg__input_dyn && _patch_write($scope0_id, "xg", input.dyn, !_server_guard($scope0_reason, 3)), $fg__input_prefix && _patch_write($scope0_id, "xh", input.prefix, !_server_guard($scope0_reason, 4)));
}, 1);
