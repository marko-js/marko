// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a;D bD ;<main><section></section><p> </p></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_mode = _source_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main><section>");
	const $content = input.mode ? frag.content : null;
	_patch_dynamic_tag($scope0_id, "a", $content, 0, 0, 0, $scope0_reason, 2);
	_attr_content("a", $scope0_id, $content);
	_html(`</section>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_reason, 1)}</p></main>`);
	$scope0_page && _scope($scope0_id, {
		e: $si__input_mode && input.note,
		h: $si__input_mode && frag?.content,
		j: $input_note__closures
	});
}, 1, 0);
