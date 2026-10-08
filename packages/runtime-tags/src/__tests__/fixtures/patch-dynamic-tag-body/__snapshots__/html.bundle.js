// tags/wrap.marko
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $wg__input_content, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0; ; ",
	a: "a !;b%b%;<!><!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_cls = _source_guard($scope0_reason, 0), $wg__input_wrap = _source_guard($scope0_reason, 5), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $tag = input.tag;
	const $input2 = { class: input.cls };
	_dynamic_tag($scope0_id, "a", $tag, $input2, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("hi");
	}, $scope0_id), 0, $wg__input_tag__OR__input_cls, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, "a1", 0, $scope0_reason, 0));
	const $tag2 = input.wrap ? wrap_default : null;
	_dynamic_tag($scope0_id, "b", $tag2, {}, _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 6));
		_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $wg__input_wrap, void 0, _patch_dynamic_tag($scope0_id, "b", $tag2, 0, "a0", 0, $scope0_reason, 5));
	_patch_write($scope0_id, "e", input.tag, 1);
	_patch_write($scope0_id, "f", input.cls, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a6");
	$scope0_page ? _scope($scope0_id, {
		e: _source_if($scope0_reason, 4) && input.tag,
		f: _source_if($scope0_reason, 3) && input.cls,
		i: _source_if($scope0_reason, 5) && input.note,
		j: $input_note__closures
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "a3", input.tag), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "a4", input.cls), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "a5", input.note));
}, 1);
