// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a9; b%b%;<button>toggle</button><!><!><!>",
	a2: /*@__PURE__*/ (() => `a2 !a5;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>inc</button>`)($Panel_content__template, $Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", label, 1, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_init($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { e: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label }) || _filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 0) && _patch_fill($scope2_id, "va4", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const x = input.label + "?";
			let n = 1;
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				label: x
			});
			_patch_child_end();
			_set_scope_reason(8);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			Panel.content({
				isOpen: true,
				label: n
			});
			_patch_child_end();
			_html(`<button>inc</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a5");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a6");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a7");
			_patch_fill($scope1_id, "va8", n, 1);
			_scope($scope1_id, {
				e: n,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "c", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 16);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: input.label,
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.open,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va11", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va12", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
