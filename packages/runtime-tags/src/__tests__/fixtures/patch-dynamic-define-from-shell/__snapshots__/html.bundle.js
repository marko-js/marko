// tags/address-view.marko
const $setup = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var address_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.address.city, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a2: "a2",
	a0: `a0${_shell_marker([[], ["a1"]], ["b>", $setup])}`,
	a: "a;D%bD ;<main><!><output> </output></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_useA__OR__input_user = _unfilled_if($scope0_reason, 0), $ui__input_user = _unfilled_if($scope0_reason, 2), $ui__input_useA = _unfilled_if($scope0_reason, 1), $fg__input_useA = _filled_guard($scope0_reason, 1), $fg__input_user = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let picked = "";
	const Card = { content: _content_resume("a0", ({ user }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_patch_write($scope1_id, "xg", user?.name);
		_html(`<h4>${_text_mark($scope1_id, "a", user.name, 1, 4, 0)}</h4>`);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		address_view_default({ address: user.address });
		_patch_child_end();
		_html(`<button class=pick>pick</button>${_el_mark($scope1_id, "c")}`);
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
		_html(`<h5>${_text_mark($scope2_id, "a", user.name, 1, 4, 0)}</h5>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.useA ? Card : Other, { user: input.user }, 9, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<output>${_text_mark($scope0_id, "b", picked)}</output></main>`);
	_patch_render($scope0_id, "a3", (($fg__input_useA ? " e" : "") + ($fg__input_user ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: ($ui__input_user || $ui__input_useA__OR__input_user) && input.useA,
		f: ($ui__input_useA || $ui__input_useA__OR__input_user) && input.user,
		h: $ui__input_useA__OR__input_user && Card,
		i: $ui__input_useA__OR__input_user && Other
	}) || ($fg__input_useA && $ui__input_user && _patch_write($scope0_id, "xe", input.useA, !_server_guard($scope0_reason, 1)), $fg__input_user && $ui__input_useA && _patch_write($scope0_id, "xf", input.user, !_server_guard($scope0_reason, 2)));
}, 1);
