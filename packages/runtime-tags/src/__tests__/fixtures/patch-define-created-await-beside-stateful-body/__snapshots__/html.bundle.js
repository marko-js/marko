// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a2: /*@__PURE__*/ (() => `a2 a7;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	a: "a !a9;b%b%b ;<!><!><!><button>toggle</button>",
	a3: /*@__PURE__*/ (() => `a3 a7;${((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	a4: "a4;b%;<!><!><!>",
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a5", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_patch_text($scope4_id, "a", label, void 0, $scope3_reason, 1)}</em>`);
				_client_guard($scope3_reason, 1) && _patch_init($scope4_id, "a0");
				_scope($scope4_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope3_reason, 0);
		_client_guard($scope3_reason, 0) && _patch_write($scope3_id, "we", label, 1);
		_write_if($scope3_reason, 0) && _scope($scope3_id, { e: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 1)) && label });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
				const $childScope = _patch_child($scope2_id, "a", 0);
				Panel.content({
					isOpen: true,
					label: value
				});
				_patch_child_end();
				_set_scope_reason(_mask_group($scope0_reason, 4) << 3);
				const $childScope2 = _patch_child($scope2_id, "b", 1);
				Panel.content({
					isOpen: true,
					label: input.label
				});
				_patch_child_end();
				_client_guard($scope0_reason, 4) && _patch_init($scope2_id, "a6");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {
					a: _existing_scope($childScope),
					b: _existing_scope($childScope2)
				}), "a7");
			}, 1, "a2");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a8");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
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
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		h: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 5) && Panel,
		m: Tag,
		p: _write_if($scope0_reason, 4) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va10", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va11", input.label, !_server_guard($scope0_reason, 4)), _content_withhold(input.label), _filled_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va12", Tag, !_server_guard($scope0_reason, 5)), _content_withhold(Tag));
}, 1);
