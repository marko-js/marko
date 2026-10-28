// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a11;b%b%b ;<!><!><!><button>toggle</button>",
	a3: /*@__PURE__*/ (() => `a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a2: "a2 !a0; D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, hidden, ...rest }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen__OR__hidden = _write_guard($scope2_reason, 0), $cg__isOpen__OR__hidden = _client_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen && !hidden) {
				const $scope3_id = _scope_id();
				_html(`<em${_attrs(rest, "a", $scope3_id, "em", void 0, $scope2_reason, 3)}>${_text_resume($scope3_id, "b", Object.keys(rest).join(), void 0, $scope2_reason, 3)}</em>${_el_resume($scope3_id, "a")}`);
				_script($scope3_id, "a0");
				_client_guard($scope2_reason, 3) && _patch_init($scope3_id, "a1");
				_scope($scope3_id, { _: _write_if($scope2_reason, 3) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen__OR__hidden, void 0, void 0, void 0, ["a2"], $scope2_reason, 0);
		$cg__isOpen__OR__hidden && _patch_init($scope2_id, "a8");
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && isOpen,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && hidden,
			g: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 3)) && rest
		}) || (_filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 2) && _patch_fill($scope2_id, "va5", isOpen, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "va6", hidden, !_server_guard($scope2_reason, 2)), _filled_guard($scope2_reason, 3) && $cg__isOpen__OR__hidden && _patch_fill($scope2_id, "va7", rest, !_server_guard($scope2_reason, 3)), $cg__isOpen__OR__hidden && _content_withhold(rest));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 3) << 7);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				title: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a9");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a10");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		title: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a11");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va12", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "va14", input.label) : _patch_fill($scope0_id, "va13", input.label, !_server_guard($scope0_reason, 3))), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va15", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
