// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>n ${_text_resume($scope0_id, "a", n, 2)}</p>`);
	const $return = {
		count: n,
		inc: _resume(() => n++, "a0", $scope0_id)
	};
	_scope($scope0_id, { b: n });
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { count, inc } = $Child_withLoadAssets({});
	_var($scope0_id, "c", $childScope, "b0");
	const $inputshow$Child_withLoadAssets_scope = _peek_scope_id();
	let { count: dynamicCount, inc: dynamicInc } = _dynamic_tag($scope0_id, "d", input.show && $Child_withLoadAssets, {});
	_var($scope0_id, "e", $inputshow$Child_withLoadAssets_scope, "b1");
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "f")}<div class=count>${_text_resume($scope0_id, "g", count)} ${_text_resume($scope0_id, "h", dynamicCount, 2)}</div>`);
	_script($scope0_id, "b2");
	_scope($scope0_id, { b: _existing_scope($childScope) });
	_var_scope($childScope, $scope0_id, { n: inc });
	_var_scope($inputshow$Child_withLoadAssets_scope, $scope0_id, { q: dynamicInc });
}, 1);
