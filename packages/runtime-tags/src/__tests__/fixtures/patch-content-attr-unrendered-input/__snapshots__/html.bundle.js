// template.marko
_shells({
	a0: "a0",
	a: "a !a2; D l ;<button class=inc> </button><section></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_rec_name = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_rec_name__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	const frag = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.rec.name, 1, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 1));
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_rec_name__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_attr_content("c", $scope0_id, input.on ? frag.content : null, 0, 1, $scope0_reason, 2);
	_html(`</section>${_el_mark($scope0_id, "c", _updates_from($scope0_reason, 2))}`);
	_script($scope0_id, "a2");
	$fg__input_rec_name && _patch_subscribers($scope0_id, "a3", "g");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.rec?.name,
		i: n,
		k: _unfilled_if($scope0_reason, 2) && frag?.content,
		m: _write_if($scope0_reason, 1) && $input_rec_name__closures
	}) || $fg__input_rec_name && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.rec?.name, !_server_guard($scope0_reason, 1));
}, 1);
