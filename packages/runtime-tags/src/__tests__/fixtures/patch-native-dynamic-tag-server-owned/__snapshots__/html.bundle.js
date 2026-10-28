// template.marko
_shells({
	a0: "a0; ; ",
	a: "a !a3;b%b D ;<!><!><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? "section" : "article", { class: input.label }, 1, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_label ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, 1), 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: count,
		j: _write_if($scope0_reason, 2) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "va4", input.on, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.label));
}, 1);
