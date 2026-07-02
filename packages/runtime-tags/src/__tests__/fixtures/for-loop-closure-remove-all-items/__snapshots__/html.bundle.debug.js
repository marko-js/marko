// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["hello"];
	_html("<div>");
	_for_of(items, () => {
		const $scope1_id = _scope_id();
		_html(`<button>Test</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<div></div>${_el_resume($scope0_id, "#div/1")}</div>`);
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
