// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a5;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $scope1_page = _page_render();
		const label = input.label + "?";
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope0_reason, 0)}</em>`);
				_scope($scope3_id, { _: $wi__input_label && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope1_reason, 0);
		$scope1_page ? _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			e: _unfilled_if($scope1_reason, 0) && label,
			_: _scope_with_id($scope0_id)
		}), "a4", $wg__isOpen) : _filled_guard($scope0_reason, 0) && _client_guard($scope1_reason, 0) && _patch_value($scope1_id, "va3", label, !_server_guard($scope0_reason, 0));
		$wg__isOpen || _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope2_id, "a", $scope0_id);
			Panel.content({ isOpen: input.open });
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, { isOpen: true });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va9", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		h: _unfilled_if($scope0_reason, 1) && input.open,
		j: open,
		k: _write_if($scope0_reason, 3) && Panel,
		m: Tag,
		o: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va8", Tag, !_server_guard($scope0_reason, 3)));
}, 1);
