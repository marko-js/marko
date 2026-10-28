// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let uid = input.id;
	const Row = { content: _content("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 0), $wi__n = _write_if($scope1_reason, 0);
		_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + n, $wg__n)}</p>`);
		$wi__n && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
		$wg__n || $wi__n && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	Row.content({ n: input.name });
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: $wi__input_name && uid,
		i: n,
		a: $wi__input_name && _existing_scope($childScope)
	});
}, 1);
