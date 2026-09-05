// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_title = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>one ${_patch_text($scope1_id, "a", input.title, 2, $scope0_owned, 0)}</em>`);
		_subscribe($si__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	const two = { content: _content_resume("a1", () => {
		const $scope2_id = _scope_id();
		_persisted_reason();
		_html(`<strong>two ${_patch_text($scope2_id, "a", input.title, 2, $scope0_owned, 0)}</strong>`);
		_subscribe($si__input_title && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ci: 1
		}));
	}, $scope0_id) };
	_html("<div");
	_patch_attrs_content({ content: input.which ? one : two }, "a", $scope0_id, "div", void 0, void 0, $scope0_owned, 1);
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a2");
	$scope0_reason ? _scope($scope0_id, {
		d: input.title,
		e: input.which,
		f: one,
		g: two,
		i: $input_title__closures
	}) : _owned_guard($scope0_owned, 0) && (_content_withheld("a0") || _content_withheld("a1")) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
