// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["b10"]];
_shells({
	b3: "b3;b%;<!><!><!>",
	b: "b !b10;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	b4: `b4;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	b2: "b2;D ;<em> </em>"
});
var rowsx_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_items__OR__input_open__OR__input_label = _updates_from($scope0_reason, 1), $uf__input_open = _updates_from($scope0_reason, 3), $uf__input_items__OR__input_label = _updates_from($scope0_reason, 0), $wg__input_label = _write_guard($scope0_reason, 4), $ui__input_items = _unfilled_if($scope0_reason, 2), $fg__input_open = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("b3", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $ui__fmt__OR__label = _unfilled_if($scope3_reason, 2), $ui__isOpen__OR__label = _unfilled_if($scope3_reason, 1), $ui__isOpen__OR__fmt = _unfilled_if($scope3_reason, 0), $fg__fmt = _filled_guard($scope3_reason, 5), $fg__label = _filled_guard($scope3_reason, 6), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "a", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_render($scope4_id, "b1", ((_filled_guard($scope3_reason, 5) ? " >e" : "") + (_filled_guard($scope3_reason, 6) ? " >f" : "")).slice(1), $scope3_reason, 2);
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, 1, 0, 0, ["b2"], $scope3_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope3_id, "b5", "e");
		$fg__label && $cg__isOpen && _patch_render($scope3_id, "b6", "f");
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			e: _write_if($scope3_reason, 1) && ($ui__isOpen__OR__label || $ui__fmt__OR__label) && fmt,
			f: _write_if($scope3_reason, 0) && ($ui__isOpen__OR__fmt || $ui__fmt__OR__label) && label
		}) || ($fg__fmt && $ui__isOpen__OR__label && _patch_write($scope3_id, "xe", fmt, 1), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope3_id, "xf", label, !_server_guard($scope3_reason, 6)));
	}, $scope0_id, 0) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && _unfilled_if($scope0_reason, 4) && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 2));
		_set_scope_reason($uf__input_open << 1 | $uf__input_items__OR__input_open__OR__input_label << 3 | $uf__input_items__OR__input_label << 5 | $uf__input_items__OR__input_open__OR__input_label << 7 | $uf__input_open << 9 | $uf__input_items__OR__input_label << 13);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Panel.content({
			isOpen: input.open,
			fmt: _resume((v) => lib.format(v), "b0"),
			label: input.label + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b7");
		_patch_render($scope1_id, "b8", ((_filled_guard($scope0_reason, 4) ? " >h" : "") + ($fg__input_items ? " c" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			c: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 0) && x,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b4", $scope0_reason, 2);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			_client_guard($scope0_reason, 4) && _patch_render($scope2_id, "b9");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b10");
	$fg__input_open && $cg__input_items && _patch_render($scope0_id, "b7", "g");
	$fg__input_label && $cg__input_items && _patch_render($scope0_id, "b11", "h");
	$fg__input_label && _patch_render($scope0_id, "b9", "h");
	_patch_fill($scope0_id, "vb12", open, 1);
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && ($ui__input_items || _unfilled_if($scope0_reason, 3)) && input.open,
		h: input.label,
		i: open
	}) || ($fg__input_open && $ui__input_items && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 4)));
});

// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button class=l>l</button>",
	a2: `a2${_shell_marker([["a5"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0), $fg__input_open = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(542 | (_updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 1) << 7));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rowsx_default({
				label: l,
				open: input.open,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a0", "f");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "a1", "g");
	_scope($scope0_id, {
		f: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.open,
		g: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.items,
		h: l
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "xf", input.open, !_server_guard($scope0_reason, 1)), $fg__input_items && $ui__input_show && _patch_write($scope0_id, "xg", input.items, !_server_guard($scope0_reason, 2)));
}, 1);
