// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a9;b%b%b ;<!><!><!><button>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label, hidden }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render(), $wg__isOpen__OR__hidden = _write_guard($scope2_reason, 0), $cg__isOpen__OR__hidden = _client_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen && !hidden) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 2)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_init($scope3_id, "a0");
				$scope2_page && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen__OR__hidden, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		_client_guard($scope2_reason, 3) && _patch_write($scope2_id, "wd", isOpen, 1);
		$cg__isOpen__OR__hidden && _patch_init($scope2_id, "a6");
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && isOpen,
			e: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && label,
			f: _unfilled_if($scope2_reason, 1) && hidden
		}) : (_filled_guard($scope2_reason, 2) && $cg__isOpen__OR__hidden && _patch_fill($scope2_id, "va4", label, !_server_guard($scope2_reason, 2)), _filled_guard($scope2_reason, 3) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "va5", hidden, !_server_guard($scope2_reason, 3)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 3) << 5);
			const $childScope = _patch_child($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a7");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a8");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!",
		hidden: input.hidden
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		j: input.hidden,
		k: open,
		l: _unfilled_if($scope0_reason, 4) && Panel,
		n: Tag
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va10", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "va12", input.label) : _patch_fill($scope0_id, "va11", input.label, !_server_guard($scope0_reason, 3))), _content_withhold(input.label), _filled_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va13", input.hidden, !_server_guard($scope0_reason, 5)), _content_withhold(input.hidden), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va14", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
