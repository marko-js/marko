// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a;D bD ;<main><section></section><p> </p></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_owned, 1)}</em>`);
		_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<main><section>");
	const $content = input.mode ? frag.content : null;
	_patch_dynamic_tag($scope0_id, "a", $content, 0, 0, 0, 0, $scope0_owned, 2);
	_attr_content("a", $scope0_id, $content, void 0, 1);
	_html(`</section>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_owned, 1)}</p></main>`);
	$scope0_reason && _scope($scope0_id, {
		e: input.note,
		h: frag?.content,
		j: $input_note__closures
	});
}, 1, 0);
