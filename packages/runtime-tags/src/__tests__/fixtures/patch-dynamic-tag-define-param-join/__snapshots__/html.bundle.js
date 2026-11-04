// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a3: "a3 a>!a4",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_n = _write_guard($scope0_reason, 0), $ui__input_show__OR__input_n = _unfilled_if($scope0_reason, 0), $ui__input_n = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Outer = { content: _content_resume("a3", ({ value }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__value__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__value = _write_if($scope1_reason, 0);
		_patch_write($scope1_id, "xe", value) && _patch_subscribers($scope1_id, "a5", "e");
		let count = 0;
		const Inner = { content: _content("a0", ({ y }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const b = value + y;
			_html(`<p>${_text_mark($scope2_id, "a", b, 1, 6, 0)}</p>`);
			_patch_write($scope2_id, "wd", y, 1);
			_unfilled_if(6, 0) && _patch_subscribe($scope2_id, "a1");
			_patch_render($scope2_id, "a2");
			_subscribe($wi__value && $Outer_content__value__closures, _scope($scope2_id, {
				d: $wi__value && y,
				_: ($wi__value || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}), "a1");
		}, $scope1_id, 0) };
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Inner.content({ y: count });
		_patch_child_end();
		_html(`<button>inc</button>${_el_mark($scope1_id, "b")}`);
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
	_patch_render($scope0_id, "a7", (($fg__input_show ? " d" : "") + ($fg__input_n ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_n || $ui__input_show__OR__input_n) && input.show,
		e: ($ui__input_show || $ui__input_show__OR__input_n) && input.n,
		f: $ui__input_show__OR__input_n && Outer
	}) || ($fg__input_show && $ui__input_n && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1)), $fg__input_n && $ui__input_show && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
