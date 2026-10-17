// template.marko
_shells({ a: "a !a1;b%b%b b ;<!><!><!><button>toggle</button><button>shown</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	let shown = true;
	const Panel = { content: _content_resume("a0", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", label, $wg__label)}</em>`);
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: label });
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
			const $childScope = _peek_scope_id();
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}<button>shown</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va4", open, 1);
	_patch_value($scope0_id, "va5", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		i: open,
		j: shown,
		k: _write_if($scope0_reason, 1) && Panel,
		m: Tag
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
