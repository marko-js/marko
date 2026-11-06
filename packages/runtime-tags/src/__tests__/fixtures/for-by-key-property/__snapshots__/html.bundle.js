// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{ id: "ab" }];
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		const key = row.id;
		_html(`<button>${_escape(key)}:${_escape(row.id.length)}`);
		if (row.id) {
			_scope_id();
			_html(`<span>${_escape(row.id.length)}</span>`);
		}
		_html(`</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 0, 0, 1);
	_scope($scope0_id, { b: rows });
}, 1);
