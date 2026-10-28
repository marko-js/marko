// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0);
		const label = input.label + "?";
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", label, 1, $scope0_reason, 1)}</em>`);
				_client_guard($scope0_reason, 1) && _patch_init($scope3_id, "a0");
				_scope($scope3_id, { _: $wi__input_label && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope1_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope0_reason, 1)) && label,
			_: _scope_with_id($scope0_id)
		}), "a5", $wg__isOpen) || _filled_guard($scope0_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va4", label, !$sg__input_label);
		$wg__isOpen || _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id($scope2_id, "a", 0, 0, $scope0_id);
			Panel.content({ isOpen: input.open });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a6");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a2"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, { isOpen: true }, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: input.label,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag,
		o: $wi__input_label && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va8", input.label, !$sg__input_label), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va9", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va10", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
