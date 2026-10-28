// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let uid = input.id;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 0), $wi__n = _write_if($scope1_reason, 0);
		_html(`<p>${_text_resume($scope1_id, "#text/0", uid + "-" + n, $wg__n)}</p>`);
		$wi__n && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
		$wg__n || $wi__n && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	Row.content({ n: input.name });
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		uid: $wi__input_name && uid,
		n,
		"#childScope/0": $wi__input_name && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		uid: "1:6",
		n: "4:6"
	});
}, 1);
