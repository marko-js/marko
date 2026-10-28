// template.marko
_shells({
	a3: "a3",
	a0: "a0",
	a: "a !a6; ;<div></div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_text_resume($scope1_id, "a", input.title, 2, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_title ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	const two = { content: _content_resume("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_text_resume($scope2_id, "a", input.title, 2, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_title ? "a4" : "a5");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ci: $wi__input_title && 1
		}));
	}, $scope0_id) };
	_html("<div");
	_patch_attrs_content({ content: input.which ? one : two }, "a", $scope0_id, "div", 0, void 0, void 0, $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		d: input.title,
		f: _unfilled_if($scope0_reason, 1) && one,
		g: _unfilled_if($scope0_reason, 1) && two,
		i: $wi__input_title && $input_title__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.title, !_server_guard($scope0_reason, 0));
}, 1);
