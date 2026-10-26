// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)($Panel_content__walks, $Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($Panel_content__template, $Panel_content__template, $Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_b = _client_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render(), $wg__isOpen = _write_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_init($scope3_id, "a0");
				$scope2_page && _scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, { e: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label }) : _filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 0) && _patch_fill($scope2_id, "va4", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			Panel.content({
				...input.a,
				...input.b
			});
			_set_scope_reason(_mask_group($scope0_reason, 5) << 1 | _mask_group($scope0_reason, 5) << 3);
			const $childScope2 = _patch_child($scope1_id, "b");
			Panel.content({
				isOpen: true,
				...input.b
			});
			_set_scope_reason(0);
			const $childScope3 = _patch_child($scope1_id, "c");
			Panel.content({
				isOpen: true,
				label: "x"
			});
			$cg__input_b && _patch_init($scope1_id, "a5");
			_patch_join_init($scope1_id, "a6", $scope0_reason, 2, _filled_guard($scope0_reason, 4) && ">g", _filled_guard($scope0_reason, 5) && ">h");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2),
				c: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a2"], $scope0_reason, 3);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "va12", input.a) : _filled_guard($scope0_reason, 4) && $cg__input_b && _patch_write($scope0_id, "xg", input.a);
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.a,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.b,
		j: input.label,
		k: open,
		l: _unfilled_if($scope0_reason, 6) && Panel,
		n: Tag
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "va9", input.b) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va8", input.b, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 7) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 7)), _content_withhold(input.label), _filled_guard($scope0_reason, 6) && _patch_fill($scope0_id, "va11", Tag, !_server_guard($scope0_reason, 6)), _content_withhold(Tag));
}, 1);
