// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a9;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	a3: `a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	a2: "a2;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_open__OR__input_label = _updates_from($scope0_reason, 0), $uf__input_open = _updates_from($scope0_reason, 2), $uf__input_label = _updates_from($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $ui__isOpen__OR__fmt = _unfilled_if($scope2_reason, 0), $fg__fmt = _filled_guard($scope2_reason, 5), $fg__label = _filled_guard($scope2_reason, 6), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_patch_render($scope3_id, "a1", ((_filled_guard($scope2_reason, 5) ? " >e" : "") + (_filled_guard($scope2_reason, 6) ? " >f" : "")).slice(1), $scope2_reason, 2);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a2"], $scope2_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope2_id, "a5", "e");
		$fg__label && $cg__isOpen && _patch_render($scope2_id, "a6", "f");
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 2, 5)) && fmt,
			f: ($ui__isOpen__OR__fmt || _unfilled_if($scope2_reason, 2)) && label
		}) || ($fg__fmt && _unfilled_if($scope2_reason, 1) && _patch_write($scope2_id, "xe", fmt, !_server_guard($scope2_reason, 5)), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope2_id, "xf", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id) };
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
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a7");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a8");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		fmt: _resume((s) => s + "!", "a0"),
		label: input.label
	}, 8);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a7", "g");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a8", "h");
	_patch_render($scope0_id, "a10", $fg__input_other && "i", $scope0_reason, 4);
	_patch_render($scope0_id, "a11", (($fg__input_label ? " h" : "") + ($fg__input_other ? " m" : "")).slice(1));
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 2)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 3)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
