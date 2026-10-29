// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	let view = input.show ? Body : null;
	_dynamic_tag($scope0_id, "a", view, {});
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.w,
		f: _unfilled_if($scope0_reason, 2) && Body,
		i: _write_if($scope0_reason, 1) && $input_w__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 1)), _content_withhold(input.show), _content_withhold(Body));
}, 1);
