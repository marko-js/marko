// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a6;b%b%b ;<!><!><!><button>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1 !a0; D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, ...rest }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $cg__isOpen = _client_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em${_attrs(rest, "a", $scope3_id, "em", 0, $scope2_reason, 1)}>${_text_resume($scope3_id, "b", Object.keys(rest).join(), 1, $scope2_reason, 1)}</em>${_el_resume($scope3_id, "a")}`);
				_script($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { e: _unfilled_if($scope2_reason, 0) && rest }) || (_filled_guard($scope2_reason, 1) && $cg__isOpen && _patch_fill($scope2_id, "va4", rest, !_server_guard($scope2_reason, 1)), $cg__isOpen && _content_withhold(rest));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				title: "x"
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a5");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		title: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		i: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 2) && Panel,
		m: Tag
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.open, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va9", Tag, !_server_guard($scope0_reason, 2)), _content_withhold(Tag));
}, 1);
