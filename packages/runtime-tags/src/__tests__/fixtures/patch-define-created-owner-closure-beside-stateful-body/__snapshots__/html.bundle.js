// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a5;b%b%b ;<!><!><!><button>toggle</button>",
	a0: "a0;D%c%;<em><!> <!></em>",
	a1: /*@__PURE__*/ (() => `a1;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $scope1_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", label, void 0, $scope1_reason, 1)} ${_patch_text($scope2_id, "b", input.label, 2, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a0"], $scope1_reason, 0);
		$scope1_page ? _scope($scope1_id, {
			e: _unfilled_if($scope1_reason, 0) && label,
			_: _scope_with_id($scope0_id)
		}) : _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_value($scope1_id, "va4", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope3_id, "a", $scope0_id);
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope3_id, "b", $scope0_id);
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
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va10", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		h: _unfilled_if($scope0_reason, 2) && input.open,
		j: open,
		k: _write_if($scope0_reason, 4) && Panel,
		m: Tag,
		o: _write_if($scope0_reason, 1) && $input_label__closures
	}) : (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "va7", input.label) : _patch_value($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1))), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va8", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va9", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
