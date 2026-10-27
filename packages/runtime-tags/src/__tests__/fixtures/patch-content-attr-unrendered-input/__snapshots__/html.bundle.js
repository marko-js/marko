// template.marko
_shells({
	a0: "a0",
	a: "a !a3; D l ;<button class=inc> </button><section></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_rec_name__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const frag = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.rec.name, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_rec_name__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("c", $scope0_id, input.on ? frag.content : null, 0, void 0, $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 2))}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.rec?.name,
		i: n,
		k: _unfilled_if($scope0_reason, 2) && frag?.content,
		m: _write_if($scope0_reason, 1) && $input_rec_name__closures
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("a0", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_fill($scope0_id, "va4", input.rec?.name, !_server_guard($scope0_reason, 1));
}, 1);
