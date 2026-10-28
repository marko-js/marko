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
	a3: /*@__PURE__*/ (() => `a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a2: "a2;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_patch_join_init($scope3_id, "a1", $scope2_reason, 2, _filled_guard($scope2_reason, 5) && ">e", _filled_guard($scope2_reason, 6) && ">f");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a2"], $scope2_reason, 4);
		_filled_guard($scope2_reason, 5) && $cg__isOpen ? _patch_fill($scope2_id, "va5", fmt) : _filled_guard($scope2_reason, 5) && _client_guard($scope2_reason, 6) && _patch_write($scope2_id, "xe", fmt);
		_filled_guard($scope2_reason, 6) && $cg__isOpen ? _patch_fill($scope2_id, "va6", label) : _client_guard($scope2_reason, 0) && _patch_write($scope2_id, "xf", label, !(_filled_guard($scope2_reason, 6) && _client_guard($scope2_reason, 5)));
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 2, 5)) && fmt,
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && label
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
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a7");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a8");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		fmt: _resume((s) => s + "!", "a0"),
		label: input.label
	}, 8);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va10", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "va12", input.label) : _patch_fill($scope0_id, "va11", input.label, !_server_guard($scope0_reason, 3))), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va13", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
