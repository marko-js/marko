// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		forOf([1, 2], (c) => {
			const $scope2_id = _scope_id();
			_html(`<button class=r>x</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_scope($scope2_id, {
				c,
				_: _scope_with_id($scope1_id)
			});
		});
		_scope($scope1_id, {
			c: row,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_rows, $wg__input_rows);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);
