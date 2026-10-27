// template.marko
const $Panel_content__walks = "D l%c";
const $Panel_content__template = "<span> </span><!><!>";
_shells({
	a: "a !a6;b%b%b ;<!><!><!><button id=t>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2 >a>a10;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;D%b%;<em><!><!></em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__isOpen = _client_guard($scope2_reason, 0);
		let n = 1;
		_html(`<span>${_text_resume($scope2_id, "a", "c")}</span>`);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 1)}${_patch_text($scope3_id, "b", n, 2, 0, 0)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_init($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "b", 1, _write_guard($scope2_reason, 0), void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		$cg__isOpen && _patch_write($scope2_id, "wf", label, 1);
		$cg__isOpen && _patch_write($scope2_id, "wg", n, 1);
		_subscribe($open__closures, _scope($scope2_id, {
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label,
			g: _unfilled_if($scope2_reason, 0) && n,
			_: _scope_with_id($scope0_id)
		}), "a4");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0, void 0, $scope0_id);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a5");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: "y"
	}, 8);
	_html(`<button id=t>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 3) && Panel,
		l: Tag,
		o: $open__closures
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va8", Tag, !_server_guard($scope0_reason, 3)), _content_withhold(Tag));
}, 1);
