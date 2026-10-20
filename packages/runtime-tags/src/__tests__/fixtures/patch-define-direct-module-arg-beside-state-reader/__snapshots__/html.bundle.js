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
	a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button class=toggle>toggle</button>`)($Panel_content__template)}`)(),
	a0: "a0;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a1", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $scope2_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", fmt(label), void 0, $scope2_reason, 2)}</em>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a0"], $scope2_reason, 4);
		$scope2_page ? _write_if($scope2_reason, 3) && _scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 4)) && fmt,
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 4)) && label
		}) : (_filled_guard($scope2_reason, 5) && _client_guard($scope2_reason, 4) && _patch_value($scope2_id, "va2", fmt, !_server_guard($scope2_reason, 5)), _filled_guard($scope2_reason, 6) && _client_guard($scope2_reason, 4) && _patch_value($scope2_id, "va3", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 13);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({
		isOpen: input.open,
		fmt: lib.format,
		label: input.label
	});
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</b>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "va6", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		h: open,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2));
}, 1);
