// template.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
_shells({
	a2: "a2",
	a: /*@__PURE__*/ (() => `a !a9;${((_w0) => `b/${_w0}&%b b`)($Wrap_content2__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Wrap_content2__template)}`)(),
	a1: "a1;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, label }) => {
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
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope2_reason, 0);
		_client_guard($scope2_reason, 0) && _patch_write($scope2_id, "we", label, 1);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { e: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label });
	}, $scope0_id) };
	const Wrap = { content: _content("a5", ({ show, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $wg__show = _write_guard($scope4_reason, 1), $cg__show = _client_guard($scope4_reason, 1);
		_if(() => {
			if (show) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "a", content, {}, 2, 0, 0, $wg__content, $scope4_reason, 2);
				_write_if($scope4_reason, 0) && _scope($scope5_id, { _: _write_if($scope4_reason, 2) && _scope_with_id($scope4_id) });
				return 0;
			}
		}, $scope4_id, "a", 1, $wg__show, 1, 0, 0, ["a3"], $scope4_reason, 1);
		_write_if($scope4_reason, 1) && _scope($scope4_id, { e: _unfilled_if($scope4_reason, 1) && content }) || (_filled_guard($scope4_reason, 2) && $cg__show && _patch_fill($scope4_id, "va6", content, !_server_guard($scope4_reason, 2)), $cg__show && _content_withhold(content));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 2);
	Wrap.content({
		show: input.show,
		content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a7" : "a8");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: "y"
	}, 24);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 3) && Panel,
		l: Tag,
		n: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope2)
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va11", Tag, !_server_guard($scope0_reason, 3)), _content_withhold(Tag));
}, 1);
