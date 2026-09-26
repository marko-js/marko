// template.marko
_shells({ a: "a !a4; ;<div></div>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_which = _source_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_patch_text($scope1_id, "a", input.title, 2, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a1");
	}, $scope0_id) };
	const two = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_patch_text($scope2_id, "a", input.title, 2, $scope0_reason, 0)}</strong>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ci: 1
		}), _client_guard($scope0_reason, 0) && "a3");
	}, $scope0_id) };
	_html("<div");
	_patch_attrs_content({ content: input.which ? one : two }, "a", $scope0_id, "div", void 0, void 0, $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		f: $si__input_which && one,
		g: $si__input_which && two,
		i: $input_title__closures
	}) : _filled_guard($scope0_reason, 0) && (_content_withheld("a0") || _content_withheld("a2")) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
