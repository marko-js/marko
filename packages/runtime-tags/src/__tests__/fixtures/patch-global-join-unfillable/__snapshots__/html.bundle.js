// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1 !a4,",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_n = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const Outer = { content: _content_resume("a1", ({ value }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__value__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__value = _write_if($scope1_reason, 0);
		let count = 0;
		const Inner = { content: _content_elide("a0", ({ y }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const b = value + y;
			_html(`<p>${_patch_text($scope2_id, "a", b + $global$1.suffix, void 0, (2 | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_fill_global_subscribe("a2", $scope2_id, _client_guard($scope2_reason, 0));
			_patch_write($scope2_id, "wd", y, 1);
			_patch_write($scope2_id, "wf", b, 1);
			_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "a3");
			_subscribe(_unfilled_if($scope2_reason, 0) && $wi__value && $Outer_content__value__closures, _scope($scope2_id, {
				d: _unfilled_if($scope1_reason, 0) && y,
				f: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope2_reason, 0)) && b,
				_: ($wi__value || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}));
		}, $scope1_id) };
		_set_scope_reason(2);
		const $childScope = _patch_child($scope1_id, "a");
		Inner.content({ y: count });
		_html(`<button>inc</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a4");
		_patch_value($scope1_id, "va5", count, 1);
		_scope($scope1_id, {
			e: value,
			f: count,
			g: $wi__value && $Outer_content__value__closures,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.show && Outer, { value: input.n }, 0, 0, $wg__input_show__OR__input_n, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "wd", input.show, 1);
	_patch_write($scope0_id, "we", input.n, 1);
	_patch_write($scope0_id, "wf", Outer, 1);
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		f: _unfilled_if($scope0_reason, 0) && Outer
	});
}, 1);
