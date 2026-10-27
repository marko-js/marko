// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_to(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button class=r>x</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_n, $wg__input_n, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);
