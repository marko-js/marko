// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{ id: "ab" }];
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		const key = row.id;
		_html(`<button>${_escape(key)}:${_escape(row.id.length)}`);
		_if(() => {
			if (row.id) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(row.id.length)}</span>`);
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6");
				return 0;
			}
		}, $scope1_id, "#text/3", 1, 0, 0, 0, 1);
		_html(`</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_scope($scope0_id, { rows }, "__tests__/template.marko", 0, { rows: "1:6" });
}, 1);
