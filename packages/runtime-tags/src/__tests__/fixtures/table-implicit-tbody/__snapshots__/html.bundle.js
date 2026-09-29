// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = ["a"];
	_html(`<table><tbody><tr${_attr_class(`rows-${rows.length}`)}><th>${_text_resume($scope0_id, "b", rows.length)} rows</th></tr>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr><td>${_text_resume($scope1_id, "a", row)}</td></tr>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 1);
	_html(`</tbody><tfoot><tr><td>${_text_resume($scope0_id, "d", rows.join("+"))}</td></tr></tfoot></table><button>add</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: rows });
}, 1);
