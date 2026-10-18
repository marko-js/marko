// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a2;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0 a9 a10 a11;${/*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)($Panel_content__walks, $Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($Panel_content__template, $Panel_content__template, $Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a1", ({ isOpen, label }) => {
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
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 2) << 5);
			const $childScope = _patch_child($scope1_id, "a");
			Panel.content({
				...input.a,
				...input.b
			});
			_set_scope_reason(_mask_group($scope0_reason, 5) << 1 | _mask_group($scope0_reason, 5) << 3 | _mask_group($scope0_reason, 5) << 5);
			const $childScope2 = _patch_child($scope1_id, "b");
			Panel.content({
				isOpen: true,
				...input.b
			});
			_set_scope_reason(0);
			const $childScope3 = _patch_child($scope1_id, "c");
			Panel.content({
				isOpen: true,
				label: "x"
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2),
				c: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a0"], $scope0_reason, 3);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "wl", Panel, 1);
	_patch_value($scope0_id, "va7", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.a,
		h: _write_if($scope0_reason, 0) && input.b,
		j: input.label,
		k: open,
		l: _write_if($scope0_reason, 6) && Panel,
		n: Tag
	}) : (_filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va3", input.a, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _patch_value($scope0_id, "va4", input.b, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 7) && _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 7)), _content_withhold(input.label), _filled_guard($scope0_reason, 6) && _patch_value($scope0_id, "va6", Tag, !_server_guard($scope0_reason, 6)), _content_withhold(Tag));
}, 1);
