// template.marko
_shells({
	a2: "a2;b%;<!><!><span>ok</span>",
	a: "a !a9;b%b%b ;<!><!><!><button>toggle</button>",
	a1: "a1;D ;<em> </em>",
	a3: "a3; ; "
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_fail = _write_guard($scope0_reason, 1), $cg__input_fail = _client_guard($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, label }) => {
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
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_if(() => {
			if (input.fail) {
				const $scope5_id = _scope_id();
				_html(_patch_text($scope5_id, "a", (() => {
					throw new Error("fail");
				})(), void 0, 0, 0));
				_scope($scope5_id, {});
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__input_fail, void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
		_html("<span>ok</span>");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_fail ? "a6" : "a7");
		$wi__input_fail && _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_fail && "a7", $wg__input_fail);
		$wg__input_fail || $wi__input_fail && _resume_branch($scope2_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
		const $childScope = _patch_child($scope1_id, "a", 0);
		Panel.content({
			isOpen: true,
			label: input.label
		});
		_patch_child_end();
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope)
		}), "a5", _write_guard($scope0_reason, 0));
		_write_guard($scope0_reason, 0) || _resume_branch($scope1_id);
	}, void 0, "a8", "a2", 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		f: input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 2) && Panel,
		l: Tag,
		n: $wi__input_label && $input_label__closures,
		o: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 0)), _content_withhold(input.label), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va11", Tag, !_server_guard($scope0_reason, 2)), _content_withhold(Tag));
}, 1);
