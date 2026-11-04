// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $setup$1 = [[], ["b9"]];
_shells({
	b2: "b2;b%;<!><!><!>",
	b: "b !b9;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	b3: `b3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	b1: "b1;D ;<em> </em>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_open__OR__input_label = _updates_from($scope0_reason, 0), $uf__input_open = _updates_from($scope0_reason, 2), $uf__input_label = _updates_from($scope0_reason, 3), $wg__input_label = _write_guard($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("b2", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $ui__isOpen__OR__fmt = _unfilled_if($scope3_reason, 0), $fg__fmt = _filled_guard($scope3_reason, 5), $fg__label = _filled_guard($scope3_reason, 6), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "a", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_render($scope4_id, "b0", [_filled_guard($scope3_reason, 5) && ">e", _filled_guard($scope3_reason, 6) && ">f"], $scope3_reason, 2);
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, 1, 0, 0, ["b1"], $scope3_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope3_id, "b4", "e");
		$fg__label && $cg__isOpen && _patch_render($scope3_id, "b5", "f");
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			e: (_unfilled_if($scope3_reason, 1, 5) || _unfilled_if($scope3_reason, 2, 5)) && fmt,
			f: ($ui__isOpen__OR__fmt || _unfilled_if($scope3_reason, 2)) && label
		}) || ($fg__fmt && _unfilled_if($scope3_reason, 1) && _patch_write($scope3_id, "xe", fmt, 1), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope3_id, "xf", label, !_server_guard($scope3_reason, 6)));
	}, $scope0_id, 0) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_open << 1 | $uf__input_open__OR__input_label << 3 | $uf__input_label << 5 | $uf__input_open__OR__input_label << 7 | $uf__input_open << 9 | $uf__input_label << 13);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b6");
			$cg__input_label && _patch_render($scope1_id, "b7");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b3"], $scope0_reason, 1);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			$cg__input_label && _patch_render($scope2_id, "b8");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b9");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "b6", "g");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "b7", "h");
	$fg__input_label && _patch_render($scope0_id, "b8", "h");
	_patch_fill($scope0_id, "vb10", open, 1);
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		i: open
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 2)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=hide>hide</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let shown = true;
	_set_scope_reason(8 | ($uf__input_label << 1 | $uf__input_label << 7));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		show: shown,
		open: true,
		label: input.label
	});
	_patch_child_end();
	_set_scope_reason($uf__input_label << 1 | $uf__input_label << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	card_default({
		show: true,
		open: true,
		label: input.label
	});
	_patch_child_end();
	_html(`<button class=hide>hide</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: shown,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
