// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = ["a"];
	_html(`<table><tbody><tr${_attr_class(`rows-${rows.length}`)}><th>${_text_resume($scope0_id, "#text/1", rows.length)} rows</th></tr>${_el_resume($scope0_id, "#tr/0")}`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr><td>${_text_resume($scope1_id, "#text/0", row)}</td></tr>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_html(`</tbody><tfoot><tr><td>${_text_resume($scope0_id, "#text/3", rows.join("+"))}</td></tr></tfoot></table><button>add</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { rows }, "__tests__/template.marko", 0, { rows: "1:6" });
}, 1);
