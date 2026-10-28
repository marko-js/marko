// template.marko
_shells({
	a5: "a5",
	a0: "a0 !a1",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $wg__input_label__OR__input_which = _write_guard($scope0_reason, 0), $cg__input_which = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Counter = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button class=inc>${_text_resume($scope1_id, "b", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "c", n, 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "a2" : "a3");
		_patch_fill($scope1_id, "va4", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}));
	}, $scope0_id) };
	const Other = { content: _content_resume("a5", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_resume($scope2_id, "a", input.label, void 0, $scope0_reason, 1)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "a6" : "a7");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			Ci: $wi__input_label && 1
		}));
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.which ? Counter : Other, { label: input.label }, 1, 0, 0, $wg__input_label__OR__input_which, $scope0_reason, 0);
	_filled_guard($scope0_reason, 2) && $cg__input_label && _patch_write($scope0_id, "xe", input.which);
	_patch_join_init($scope0_id, "a9", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && "d", _filled_guard($scope0_reason, 2) && "e");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.which,
		f: _unfilled_if($scope0_reason, 0) && Counter,
		g: _unfilled_if($scope0_reason, 0) && Other,
		i: $wi__input_label && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && ($cg__input_which || _content_withheld("a0", $scope0_id) || _client_guard($scope0_reason, 0) || _content_withheld("a5", $scope0_id)) && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 1)), $cg__input_which && _content_withhold(input.label));
}, 1);
