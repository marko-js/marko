// template.marko
const $Outer_content__walks = "b%c";
const $Outer_content__template = "<!><!><!>";
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
_shells({
	a: /*@__PURE__*/ (() => `a !a10;${((_w0) => `b/${_w0}&%b b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Outer_content__template)}`)(),
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__isOpen = _write_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_patch_text($scope4_id, "a", label, void 0, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_init($scope4_id, "a0");
				$scope1_page && _scope($scope4_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope1_reason, 0);
		$scope1_page ? _write_if($scope1_reason, 0) && _scope($scope1_id, { e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }) : _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va4", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Outer = { content: _content("a7", ({ isOpen, label, show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render(), $wg__show = _write_guard($scope2_reason, 3), $cg__show = _client_guard($scope2_reason, 3);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_set_scope_reason(_mask_group($scope2_reason, 1) << 1 | _mask_group($scope2_reason, 2) << 3);
				const $childScope = _patch_child($scope3_id, "a");
				Inner.content({
					isOpen,
					label
				});
				_client_guard($scope2_reason, 1) && _patch_init($scope3_id, "a5");
				_client_guard($scope2_reason, 2) && _patch_init($scope3_id, "a6");
				$scope2_page && _scope($scope3_id, {
					_: _write_if($scope2_reason, 0) && _scope_with_id($scope2_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__show, void 0, void 0, void 0, ["a2"], $scope2_reason, 3);
		$scope2_page ? _write_if($scope2_reason, 3) && _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 1)) && isOpen,
			e: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 2)) && label
		}) : (_filled_guard($scope2_reason, 1) && $cg__show && _patch_fill($scope2_id, "va8", isOpen, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && $cg__show && _patch_fill($scope2_id, "va9", label, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope2 = _patch_child($scope0_id, "a");
	Outer.content({
		isOpen: input.open,
		label: input.label,
		show: input.show
	});
	const Tag = input.other ? "div" : Inner;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a10");
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Inner,
		m: Tag,
		a: _existing_scope($childScope2)
	}) : (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va11", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va12", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
