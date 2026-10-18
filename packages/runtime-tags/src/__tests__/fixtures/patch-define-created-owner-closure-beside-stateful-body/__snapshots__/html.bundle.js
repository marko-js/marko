// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a3;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0 a9 a10 a11 a12;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", label, $wg__label)} ${_text_resume($scope2_id, "b", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_label || $wg__label);
				return 0;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_scope($scope1_id, {
			e: _write_if($scope1_reason, 1) && label,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope3_id, "a");
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _patch_child($scope3_id, "b");
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a0"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va7", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		h: _write_if($scope0_reason, 2) && input.open,
		j: open,
		k: _write_if($scope0_reason, 4) && Panel,
		m: Tag,
		o: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va5", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va6", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
