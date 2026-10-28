// template.marko
_shells({
	a0: "a0 !a1",
	a: "a !a3;b%b D ;<!><!><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const Content = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<em>${_text_resume($scope1_id, "b", label, 1, 4, 0)} ${_text_resume($scope1_id, "c", count, 2)}</em>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_patch_fill($scope1_id, "va2", count, 1);
		_scope($scope1_id, { g: count });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.show ? Content : "span", { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		h: n,
		i: _unfilled_if($scope0_reason, 0) && Content
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "va4", input.show, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.label));
}, 1);
