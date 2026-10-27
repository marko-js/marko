// tags/address-view.marko
const $setup = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var address_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.address.city, void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a2: "a2",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], ["a1"]], ["b>", $setup]))}`)(),
	a: "a !;D%bD ;<main><!><output> </output></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_user = _client_guard($scope0_reason, 2), $cg__input_useA = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let picked = "";
	const Card = { content: _content_resume("a0", ({ user }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_patch_write($scope1_id, "wg", user?.name);
		_html(`<h4>${_patch_text($scope1_id, "a", user.name)}</h4>`);
		const $childScope = _patch_child($scope1_id, "b", 0);
		address_view_default({ address: user.address });
		_patch_child_end();
		_html(`<button class=pick>pick</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			g: user?.name,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, $scope0_id) };
	const Other = { content: _content_resume("a2", ({ user }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_patch_text($scope2_id, "a", user.name)}</h5>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.useA ? Card : Other, { user: input.user }, 9, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<output>${_text_resume($scope0_id, "b", picked)}</output></main>`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.user,
		h: _unfilled_if($scope0_reason, 0) && Card,
		i: _unfilled_if($scope0_reason, 0) && Other
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_user && _patch_fill($scope0_id, "va3", input.useA, !_server_guard($scope0_reason, 1)), $cg__input_user && _content_withhold(input.useA), _filled_guard($scope0_reason, 2) && $cg__input_useA && _patch_fill($scope0_id, "va4", input.user, !_server_guard($scope0_reason, 2)), $cg__input_useA && _content_withhold(input.user));
}, 1);
