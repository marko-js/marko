// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		forOf([1, 2], (c) => {
			const $scope2_id = _scope_id();
			_html(`<button class=r>x</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, {
				c,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { c: "3:8" });
		});
		_scope($scope1_id, {
			row,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { row: "2:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
