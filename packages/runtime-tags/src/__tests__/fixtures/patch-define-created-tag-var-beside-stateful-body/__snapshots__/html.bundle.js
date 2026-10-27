// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a9;b%b%b ;<!><!><!><button>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2 a14;${/*@__PURE__*/ ((_w0) => `b0${_w0}&D l%c`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<b> </b><!><!>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	_write_guard($scope0_reason, 1);
	const $scope0_page = _page_render(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 1), $cg__label = _client_guard($scope2_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 2)}</em>`);
				$cg__label && _patch_init($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 1);
		const $return = label + (isOpen ? "Y" : "N");
		_client_guard($scope2_reason, 1) && _patch_write($scope2_id, "we", label, 1);
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "a5");
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: _unfilled_if($scope2_reason, 2) && isOpen,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && label
		}) || _filled_guard($scope2_reason, 1) && $cg__label && _patch_fill($scope2_id, "va4", isOpen, !_server_guard($scope2_reason, 1));
		return $return;
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a", 0, $cg__input_label && 1);
			let ret = Panel.content({
				isOpen: true,
				label: input.label
			});
			_filled_guard($scope0_reason, 1) ? _patch_fill($scope1_id, "va7", ret) : _patch_init($scope1_id, "a8");
			$cg__input_label && _var($scope1_id, "b", $childScope, "a6");
			_patch_child_end();
			_html(`<b>${_patch_text($scope1_id, "c", ret, void 0, $scope0_reason, 1)}</b>`);
			if ($scope0_page) _if(() => {}, $scope1_id, "d", 1, 1, 0, 0, 1);
			_scope($scope1_id, {
				e: ret,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 2) && Panel,
		l: Tag
	}) || (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "va11", input.label) : _patch_fill($scope0_id, "va10", input.label, !$sg__input_label)), _content_withhold(input.label), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va12", Tag, !_server_guard($scope0_reason, 2)), _content_withhold(Tag));
}, 1);
