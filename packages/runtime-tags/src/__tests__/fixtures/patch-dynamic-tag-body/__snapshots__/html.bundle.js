// tags/wrap.marko
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,hi",
	a1: "a1; ; ",
	a: "a !;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_wrap = _write_guard($scope0_reason, 5), $cg__input_cls = _client_guard($scope0_reason, 4), $cg__input_tag = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, { class: input.cls }, 1, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("hi");
	}, $scope0_id), 0, $wg__input_tag__OR__input_cls, $scope0_reason, 0, 0, 3);
	_dynamic_tag($scope0_id, "b", input.wrap ? wrap_default : null, {}, 10, _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.note, void 0, $scope0_reason, 6));
		_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, 1), 0, $wg__input_wrap, $scope0_reason, 5);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.tag,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.cls,
		i: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.note,
		j: _write_if($scope0_reason, 6) && $input_note__closures
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_cls && _patch_fill($scope0_id, "va3", input.tag, !_server_guard($scope0_reason, 3)), $cg__input_cls && _content_withhold(input.tag), _filled_guard($scope0_reason, 4) && $cg__input_tag && _patch_fill($scope0_id, "va4", input.cls, !_server_guard($scope0_reason, 4)), $cg__input_tag && _content_withhold(input.cls), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va5", input.note, !_server_guard($scope0_reason, 6)));
}, 1);
