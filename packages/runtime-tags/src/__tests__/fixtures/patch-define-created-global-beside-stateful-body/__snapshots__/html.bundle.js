// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
_shells({
	a: "a !a5;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&D l`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<span> </span>`)($Panel_content__template, $Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 2)}</em>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, _write_guard($scope2_reason, 1), void 0, void 0, void 0, ["a1"], $scope2_reason, 1);
		_html(`<span>${_patch_text($scope2_id, "b", isOpen ? label : "-", void 0, $scope2_reason, 0)}</span>`);
		_patch_write($scope2_id, "we", isOpen, 1);
		$scope2_page ? _scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && isOpen,
			f: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && label
		}) : _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_value($scope2_id, "va3", label, !_server_guard($scope2_reason, 2));
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
			_html(`<span>${_patch_text($scope1_id, "c", $global$1.brand)}</span>`);
			_fill_global_subscribe("a4", $scope1_id);
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
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wj", Panel, 1);
	_patch_value($scope0_id, "va8", open, 1);
	$scope0_page ? _scope($scope0_id, {
		h: input.label,
		i: open,
		j: _write_if($scope0_reason, 1) && Panel,
		l: Tag
	}) : (_filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
