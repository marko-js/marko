// template.marko
_shells({
	a0: "a0,",
	a1: "a1 !a2,",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $wg__input_label__OR__input_which = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Counter = { content: _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button class=inc>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "c", n, 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a3");
		_patch_value($scope1_id, "va4", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}));
	}, $scope0_id) };
	const Other = { content: _content_resume("a0", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 1)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			Ci: $wi__input_label && 1
		}));
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.which ? Counter : Other, { label: input.label }, 0, 0, $wg__input_label__OR__input_which, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "we", input.which, 1);
	_patch_write($scope0_id, "wf", Counter, 1);
	_patch_write($scope0_id, "wg", Other, 1);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		e: $wi__input_label && input.which,
		f: $wi__input_label__OR__input_which && Counter,
		g: $wi__input_label__OR__input_which && Other,
		i: $wi__input_label && $input_label__closures
	}) : _filled_guard($scope0_reason, 1) && (_content_withheld("a1", _client_guard($scope0_reason, 0)) || _content_withheld("a0", _client_guard($scope0_reason, 0))) && _patch_value($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1));
}, 1);
