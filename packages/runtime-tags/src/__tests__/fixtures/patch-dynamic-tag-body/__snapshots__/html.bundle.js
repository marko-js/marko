// tags/wrap.marko
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0; ; ",
	a: "a !;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_wrap = _write_guard($scope0_reason, 5), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, { class: input.cls }, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("hi");
	}, $scope0_id), 0, $wg__input_tag__OR__input_cls, void 0, 1, $scope0_reason, 0);
	_dynamic_tag($scope0_id, "b", input.wrap ? wrap_default : null, {}, _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 6));
		_unfilled_if($scope0_reason, 6) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $wg__input_wrap, void 0, 2, $scope0_reason, 5);
	_patch_write($scope0_id, "we", input.tag, 1);
	_patch_write($scope0_id, "wf", input.cls, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a6");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.tag,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.cls,
		i: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.note,
		j: _write_if($scope0_reason, 6) && $input_note__closures
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va3", input.tag, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "va4", input.cls, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "va5", input.note, !_server_guard($scope0_reason, 6)));
}, 1);
