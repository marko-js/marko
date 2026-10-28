// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let uid = input.id;
	_html(`<p>${_text_resume($scope0_id, "a", uid + "-" + input.name, $wg__input_name)}</p>`);
	$wi__input_name && _scope($scope0_id, { f: uid });
	$wg__input_name || $wi__input_name && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	child_default({
		id: input.id,
		name: input.name
	});
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
