// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a2: "a2",
	a3: "a3 !",
	a: /*@__PURE__*/ (() => `a !a5;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_other__OR__input_show = _client_guard($scope0_reason, 2), $cg__input_label__OR__input_other = _client_guard($scope0_reason, 0), $cg__input_label__OR__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", label, void 0, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_init($scope2_id, "a0");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, { e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }) || _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va4", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Other = { content: _content_resume("a2", ({ label }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<i>${_patch_text($scope3_id, "a", label)}</i>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_set_scope_reason(2 | _mask_group($scope0_reason, 4) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Panel.content({
		isOpen: open,
		label: input.label
	});
	_patch_child_end();
	const Tag = input.other ? Other : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: input.show,
		label: input.label + "!"
	}, 9, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.show,
		i: open,
		j: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && Panel,
		k: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && Other,
		m: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && Tag,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_other__OR__input_show && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 4)), $cg__input_other__OR__input_show && _content_withhold(input.label), _filled_guard($scope0_reason, 6) && $cg__input_label__OR__input_other && _patch_fill($scope0_id, "va7", input.show, !_server_guard($scope0_reason, 6)), $cg__input_label__OR__input_other && _content_withhold(input.show), _filled_guard($scope0_reason, 5) && $cg__input_label__OR__input_show && _patch_fill($scope0_id, "va8", Tag, !_server_guard($scope0_reason, 5)), $cg__input_label__OR__input_show && _content_withhold(Tag));
}, 1);
