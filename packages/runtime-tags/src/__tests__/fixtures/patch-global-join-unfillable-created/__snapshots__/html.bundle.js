// template.marko
_shells({
	a0: "a0 a10;D ;<p> </p>",
	a3: "a3 a>a10!a4",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const Outer = { content: _content_resume("a3", ({ value }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__value__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__value = _write_if($scope1_reason, 0);
		_patch_fill($scope1_id, "va5", value);
		let count = 0;
		const Inner = { content: _content("a0", ({ y }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason(), $cg__y = _client_guard($scope2_reason, 0);
			const b = value + y;
			_html(`<p>${_text_resume($scope2_id, "a", b + $global$1.suffix, void 0, (2 | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_fill_global_subscribe("a1", $scope2_id, $cg__y);
			_patch_write($scope2_id, "wd", y, 1);
			$cg__y && _patch_init($scope2_id, "a2");
			_subscribe(_unfilled_if($scope2_reason, 0) && $wi__value && $Outer_content__value__closures, _scope($scope2_id, {
				d: $wi__value && y,
				f: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope2_reason, 0)) && b,
				_: ($wi__value || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}));
		}, $scope1_id, 1) };
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Inner.content({ y: count });
		_patch_child_end();
		_html(`<button>inc</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a4");
		_patch_fill($scope1_id, "va6", count, 1);
		_scope($scope1_id, {
			e: value,
			f: count,
			g: $wi__value && $Outer_content__value__closures,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.show && Outer, { value: input.n }, 9, 0, 0, $wg__input_show__OR__input_n, $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		f: _unfilled_if($scope0_reason, 0) && Outer
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "va7", input.show, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va8", input.n, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.n));
}, 1);
