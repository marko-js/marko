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
	a: `a !a6;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button class=toggle>toggle</button>`)($Panel_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_open__OR__input_label = _updates_from($scope0_reason, 0), $uf__input_open = _updates_from($scope0_reason, 1), $uf__input_label = _updates_from($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a2", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $ui__fmt__OR__label = _unfilled_if($scope2_reason, 2), $ui__isOpen__OR__label = _unfilled_if($scope2_reason, 1), $ui__isOpen__OR__fmt = _unfilled_if($scope2_reason, 0), $fg__fmt = _filled_guard($scope2_reason, 5), $fg__label = _filled_guard($scope2_reason, 6), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_patch_render($scope3_id, "a0", ((_filled_guard($scope2_reason, 5) ? " >e" : "") + (_filled_guard($scope2_reason, 6) ? " >f" : "")).slice(1), $scope2_reason, 2);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope2_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope2_id, "a3", "e");
		$fg__label && $cg__isOpen && _patch_render($scope2_id, "a4", "f");
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			e: ($ui__isOpen__OR__label || $ui__fmt__OR__label) && fmt,
			f: ($ui__isOpen__OR__fmt || $ui__fmt__OR__label) && label
		}) || ($fg__fmt && $ui__isOpen__OR__label && _patch_write($scope2_id, "xe", fmt, 1), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope2_id, "xf", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id) };
	_set_scope_reason($uf__input_open << 1 | $uf__input_open__OR__input_label << 3 | $uf__input_label << 5 | $uf__input_open__OR__input_label << 7 | $uf__input_open << 9 | $uf__input_label << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({
		isOpen: input.open,
		fmt: lib.format,
		label: input.label
	});
	_patch_child_end();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_text_mark($scope1_id, "a", input.label, $wg__input_label)}</b>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a5");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a6");
	$fg__input_label && _patch_render($scope0_id, "a5", "g");
	_scope($scope0_id, {
		g: input.label,
		h: open,
		a: _existing_scope($childScope)
	}) || $fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2));
}, 1);
