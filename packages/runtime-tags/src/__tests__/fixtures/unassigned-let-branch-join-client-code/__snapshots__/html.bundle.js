// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let uid = input.id;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + input.name, $wg__input_name)}</p>`);
			$wi__input_show__OR__input_name && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1), 0, 0, 1);
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 1) && input.name,
		i: $wi__input_show__OR__input_name && uid,
		j: n
	});
}, 1);
