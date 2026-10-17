// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
_shells({
	a: "a !a3;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0 a9 a10 a11;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	const Panel = { content: _content_resume("a1", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen__OR__label = _write_guard($scope2_reason, 0), $wg__isOpen = _write_guard($scope2_reason, 1), $wi__label = _write_if($scope2_reason, 2), $wi__isOpen__OR__label = _write_if($scope2_reason, 0);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", label, $wg__label)}</em>`);
				$wi__isOpen__OR__label && _scope($scope3_id, { _: $wi__label && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", $wg__isOpen__OR__label, $wg__isOpen, 0, 0, 1);
		_html(`<span>${_text_resume($scope2_id, "b", isOpen ? label : "-", $wg__isOpen__OR__label)}</span>`);
		$wi__isOpen__OR__label && _scope($scope2_id, {
			e: $wi__label && isOpen,
			f: _write_if($scope2_reason, 1) && label
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(64 | ((2 | _mask_group($scope0_reason, 0)) << 1 | _mask_group($scope0_reason, 0) << 3));
			const $childScope = _patch_child($scope1_id, "a");
			Panel.content({
				isOpen: input.show,
				label: $global$1.brand
			});
			_set_scope_reason(68);
			const $childScope2 = _patch_child($scope1_id, "b");
			Panel.content({
				isOpen: true,
				label: $global$1.brand
			});
			_fill_global_subscribe("a2", $scope1_id, 1);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_patch_write($scope0_id, "wj", Panel, 1);
	_patch_value($scope0_id, "va7", open, 1);
	$scope0_page ? _scope($scope0_id, {
		h: input.label,
		i: open,
		j: _write_if($scope0_reason, 1) && Panel,
		l: Tag
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", input.show, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va6", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
