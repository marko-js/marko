// template.marko
_shells({
	a0: "a0,",
	a: "a !;D bD ;<main><section></section><p> </p></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main><section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 2))}<p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_reason, 1)}</p></main>`);
	_patch_write($scope0_id, "wh", frag?.content, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		h: _unfilled_if($scope0_reason, 2) && frag?.content,
		j: _write_if($scope0_reason, 1) && $input_note__closures
	}) : _filled_guard($scope0_reason, 1) && _content_withheld("a0") && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
