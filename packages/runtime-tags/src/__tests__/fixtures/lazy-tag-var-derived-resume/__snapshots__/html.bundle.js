// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>n ${_text_resume($scope0_id, "a", n, 2)}</p>`);
	const $return = _resume(() => n++, "a0", $scope0_id);
	_scope($scope0_id, { b: n });
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let api = $Child_withLoadAssets({});
	_var($scope0_id, "c", $childScope, "b1");
	const actions = { api };
	const inc = _resume(function() {
		api();
	}, "b0", $scope0_id);
	_html(`<button class=actions>inc</button>${_el_resume($scope0_id, "d")}<button class=inc>inc</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "b2");
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		h: inc,
		b: _existing_scope($childScope)
	});
	_var_scope($childScope, $scope0_id, {
		f: api,
		g: actions
	});
}, 1);
