// template.marko
_shells({
	a2: "a2;Db%;<strong>two <!></strong>",
	a0: "a0;Db%;<em>one <!></em>",
	a: "a; ;<div></div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 1), $wi__input_title__OR__input_which = _write_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "a", input.title, 2, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a1", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: $wi__input_title__OR__input_which && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	const two = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "a", input.title, 2, $scope0_reason, 1)}</strong>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a3", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {
			_: $wi__input_title__OR__input_which && _scope_with_id($scope0_id),
			Ci: $wi__input_title && 1
		}));
	}, $scope0_id) };
	_html("<div>");
	_attr_content("a", $scope0_id, input.which ? one : two, 0, 1, $scope0_reason, 2);
	_html(`</div>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 2))}`);
	$fg__input_title && _patch_subscribers($scope0_id, "a4", "d");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.title,
		f: _unfilled_if($scope0_reason, 2) && one,
		g: _unfilled_if($scope0_reason, 2) && two,
		i: $wi__input_title && $input_title__closures
	}) || $fg__input_title && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 1));
}, 1);
