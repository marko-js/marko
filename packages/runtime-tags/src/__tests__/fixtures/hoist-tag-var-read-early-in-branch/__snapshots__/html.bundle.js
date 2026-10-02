// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let out = "";
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button>${_text_resume($scope1_id, "b", out)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0, 0, 1);
	const read = _resume(() => input.x, "a0", $scope0_id);
	_html(`<div>${_text_resume($scope0_id, "b", read(), $wg__input_x)}</div>`);
	_scope($scope0_id, {
		e: input.x,
		g: read
	});
	$wg__input_x || _resume_branch($scope0_id);
}, 1);
