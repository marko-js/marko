// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a9;b%b%b ;<!><!><!><button>toggle</button>",
	a3: "a3;D%c%;<em><!> <!></em>",
	a4: /*@__PURE__*/ (() => `a4 >a> >b>;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a5", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", label, void 0, $scope1_reason, 1)} ${_patch_text($scope2_id, "b", input.label, 2, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "a0" : "a1");
				_client_guard($scope1_reason, 1) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a3"], $scope1_reason, 0);
		_scope($scope1_id, {
			e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label,
			_: _scope_with_id($scope0_id)
		}) || _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va6", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope3_id, "a", 0, void 0, $scope0_id);
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope3_id, "b", 1, void 0, $scope0_id);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			$cg__input_label && _patch_init($scope3_id, "a7");
			_client_guard($scope0_reason, 3) && _patch_init($scope3_id, "a8");
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a4"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 16);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		f: input.label,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag,
		o: _write_if($scope0_reason, 1) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && ($cg__input_show ? _patch_fill($scope0_id, "va11", input.label) : _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 1))), _content_withhold(input.label), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va12", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va13", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
