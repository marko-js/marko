// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a;D bD ;<main><section></section><p> </p></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_note = _filled_guard($scope0_reason, 1), $cg__input_mode = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 1));
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main><section>");
	_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 2);
	_html(`</section>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 2))}<p>${_text_mark($scope0_id, "b", input.note, 1, $scope0_reason, 1)}</p></main>`);
	$fg__input_note && $cg__input_mode && _patch_subscribers($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		h: _unfilled_if($scope0_reason, 2) && frag?.content,
		j: _write_if($scope0_reason, 1) && $input_note__closures
	}) || $fg__input_note && $cg__input_mode && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 1));
}, 1);
