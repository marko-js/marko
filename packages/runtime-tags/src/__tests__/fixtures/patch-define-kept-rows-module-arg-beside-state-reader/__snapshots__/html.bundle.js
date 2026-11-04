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
	a2: `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_open__OR__input_label = _updates_from($scope0_reason, 0), $uf__input_open = _updates_from($scope0_reason, 1), $uf__input_label = _updates_from($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a3", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $ui__fmt__OR__label = _unfilled_if($scope3_reason, 2), $ui__isOpen__OR__label = _unfilled_if($scope3_reason, 1), $ui__isOpen__OR__fmt = _unfilled_if($scope3_reason, 0), $fg__fmt = _filled_guard($scope3_reason, 5), $fg__label = _filled_guard($scope3_reason, 6), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "a", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_render($scope4_id, "a0", ((_filled_guard($scope3_reason, 5) ? " >e" : "") + (_filled_guard($scope3_reason, 6) ? " >f" : "")).slice(1), $scope3_reason, 2);
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope3_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope3_id, "a4", "e");
		$fg__label && $cg__isOpen && _patch_render($scope3_id, "a5", "f");
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			e: ($ui__isOpen__OR__label || $ui__fmt__OR__label) && fmt,
			f: ($ui__isOpen__OR__fmt || $ui__fmt__OR__label) && label
		}) || ($fg__fmt && $ui__isOpen__OR__label && _patch_write($scope3_id, "xe", fmt, 1), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope3_id, "xf", label, !_server_guard($scope3_reason, 6)));
	}, $scope0_id) };
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2);
		_set_scope_reason($uf__input_open << 1 | $uf__input_open__OR__input_label << 3 | $uf__input_label << 5 | $uf__input_open__OR__input_label << 7 | $uf__input_open << 9 | $uf__input_label << 13);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: input.label + x
		});
		_patch_child_end();
		$ui__input_label && _patch_write($scope1_id, "wc", x, 1);
		_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a6");
		$cg__input_label && _patch_render($scope1_id, "a7");
		_scope($scope1_id, {
			c: $ui__input_label && x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", 0, 0);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			$cg__input_label && _patch_render($scope2_id, "a8");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	$fg__input_label && _patch_render($scope0_id, "a8", "g");
	_scope($scope0_id, {
		g: input.label,
		h: open
	}) || $fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2));
}, 1);
