// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let out = "";
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			_html(`<button>${_text_resume($scope1_id, "#text/1", out)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	const read = _resume(() => input.x, "__tests__/template.marko_0/read", $scope0_id);
	_html(`<div>${_text_resume($scope0_id, "#text/1", read(), $wg__input_x)}</div>`);
	_scope($scope0_id, {
		input_x: input.x,
		read
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		read: "5:8"
	});
	$wg__input_x || _resume_branch($scope0_id);
	_assert_hoist(read);
}, 1);
