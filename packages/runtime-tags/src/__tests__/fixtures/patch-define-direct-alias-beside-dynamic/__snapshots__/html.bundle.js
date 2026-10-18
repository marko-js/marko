// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a0", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", label, $wg__label)}</em>`);
				_write_if($scope1_reason, 0) && _scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { e: label });
	}, $scope0_id) };
	const { label: l } = input.rest;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({
		isOpen: input.show,
		label: l
	});
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va6", open, 1);
	$scope0_page ? _scope($scope0_id, {
		i: input.label,
		j: open,
		k: _write_if($scope0_reason, 3) && Panel,
		o: Tag,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va2", input.show, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 4)), _content_withhold(input.label), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", l, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va5", Tag, !_server_guard($scope0_reason, 3)), _content_withhold(Tag));
}, 1);
