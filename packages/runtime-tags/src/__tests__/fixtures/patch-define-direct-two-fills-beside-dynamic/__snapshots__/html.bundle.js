// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", label, 1, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_init($scope2_id, "a0");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, { e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }) || _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va3", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({
		isOpen: input.show,
		label: input.label,
		...input.rest
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a4");
	_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.show);
	_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.rest);
	_patch_join_init($scope0_id, "a7", $scope0_reason, 2, _filled_guard($scope0_reason, 3) && "f", _filled_guard($scope0_reason, 4) && "g", _filled_guard($scope0_reason, 5) && "h");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.show,
		g: input.label,
		h: _write_if($scope0_reason, 0) && input.rest,
		k: open,
		l: _unfilled_if($scope0_reason, 6) && Panel,
		n: Tag,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 4)), _content_withhold(input.label), _filled_guard($scope0_reason, 6) && _patch_fill($scope0_id, "va6", Tag, !_server_guard($scope0_reason, 6)), _content_withhold(Tag));
}, 1);
