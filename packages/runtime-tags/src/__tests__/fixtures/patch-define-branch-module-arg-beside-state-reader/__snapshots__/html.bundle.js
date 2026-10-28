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
	a: "a !a8;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a3", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_join_init($scope4_id, "a0", $scope3_reason, 2, _filled_guard($scope3_reason, 5) && ">e", _filled_guard($scope3_reason, 6) && ">f");
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope3_reason, 4);
		_filled_guard($scope3_reason, 5) && $cg__isOpen ? _patch_fill($scope3_id, "va4", fmt) : _filled_guard($scope3_reason, 5) && _client_guard($scope3_reason, 6) && _patch_write($scope3_id, "xe", fmt);
		_filled_guard($scope3_reason, 6) && $cg__isOpen ? _patch_fill($scope3_id, "va5", label) : _client_guard($scope3_reason, 0) && _patch_write($scope3_id, "xf", label, !(_filled_guard($scope3_reason, 6) && _client_guard($scope3_reason, 5)));
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			e: (_unfilled_if($scope3_reason, 1, 5) || _unfilled_if($scope3_reason, 2, 5)) && fmt,
			f: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 2)) && label
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 3) << 13);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a6");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a7");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		i: open
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va9", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "va11", input.label) : _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 3))));
}, 1);
