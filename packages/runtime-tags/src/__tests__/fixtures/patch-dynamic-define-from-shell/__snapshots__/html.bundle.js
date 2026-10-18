// tags/address-view.marko
_shells({ b: "b;D ;<p> </p>" });
var address_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.address.city, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,",
	a1: "a1 !a2,",
	a: "a;D%bD ;<main><!><output> </output></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let picked = "";
	const Card = { content: _content_resume("a1", ({ user }) => {
		const $scope1_id = _scope_id();
		_patch_write($scope1_id, "wg", user?.name);
		_scope_reason();
		_html(`<h4>${_patch_text($scope1_id, "a", user.name)}</h4>`);
		const $childScope = _patch_child($scope1_id, "b");
		address_view_default({ address: user.address });
		_html(`<button class=pick>pick</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, {
			g: user?.name,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, $scope0_id) };
	const Other = { content: _content_resume("a0", ({ user }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_patch_text($scope2_id, "a", user.name)}</h5>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.useA ? Card : Other, { user: input.user }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_html(`<output>${_text_resume($scope0_id, "b", picked)}</output></main>`);
	_patch_write($scope0_id, "we", input.useA, 1);
	_patch_write($scope0_id, "wf", input.user, 1);
	_patch_write($scope0_id, "wh", Card, 1);
	_patch_write($scope0_id, "wi", Other, 1);
	_patch_value($scope0_id, "va3", picked, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.user,
		h: _unfilled_if($scope0_reason, 0) && Card,
		i: _unfilled_if($scope0_reason, 0) && Other
	});
}, 1);
