// template.marko
_shells({
	a2: "a2",
	a0: "a0",
	a: "a !a4; ;<div></div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $ui__input_which = _unfilled_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "a", input.title, 2, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a1", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_title && "a1");
	}, $scope0_id) };
	const two = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "a", input.title, 2, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a3", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cj: $wi__input_title && 1
		}), $cg__input_title && "a3");
	}, $scope0_id) };
	const attrs = { content: input.which ? one : two };
	_html("<div");
	_attrs_content(attrs, "a", $scope0_id, "div", 0, 1, 0, $scope0_reason, 1);
	_html(`</div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: input.title,
		f: $ui__input_which && one,
		g: $ui__input_which && two,
		j: $wi__input_title && $input_title__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a5", "d");
}, 1);
