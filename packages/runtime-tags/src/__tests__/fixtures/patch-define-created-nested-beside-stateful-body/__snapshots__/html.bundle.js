// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Inner_content__walks, $Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Inner_content__template, $Inner_content__template);
_shells({
	a: "a !a6;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("a1", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", label, $wg__label)}</em>`);
				_write_if($scope2_reason, 0) && _scope($scope4_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: label });
	}, $scope0_id) };
	const Outer = { content: _content("a2", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope = _patch_child($scope3_id, "a");
		Inner.content({
			isOpen,
			label
		});
		_set_scope_reason(_mask_group($scope3_reason, 2) << 1 | _mask_group($scope3_reason, 2) << 5);
		const $childScope2 = _patch_child($scope3_id, "b");
		Inner.content({
			isOpen: true,
			label
		});
		_patch_init($scope3_id, "a5", 1);
		$scope3_page ? _scope($scope3_id, {
			a: _existing_scope($childScope),
			b: _existing_scope($childScope2)
		}) : (_filled_guard($scope3_reason, 1) && _patch_value($scope3_id, "va3", isOpen, !_server_guard($scope3_reason, 1)), _filled_guard($scope3_reason, 2) && _patch_value($scope3_id, "va4", label, !_server_guard($scope3_reason, 2)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 3) << 5);
			const $childScope3 = _patch_child($scope1_id, "a");
			Outer.content({
				isOpen: input.open,
				label: input.label
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Inner;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a6");
	_patch_write($scope0_id, "wk", Inner, 1);
	_patch_value($scope0_id, "va10", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 1) && input.open,
		h: input.label,
		j: open,
		k: _write_if($scope0_reason, 4) && Inner,
		m: Tag
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va9", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
