// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let entries = {
		a: 1,
		b: 2
	};
	_html("<div>");
	_for_in(entries, (key, value) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(key)}${_el_resume($scope1_id, "#text/0")}:<!>${_escape(value)}${_el_resume($scope1_id, "#text/1")}</p>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, (key) => key, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>Change</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
