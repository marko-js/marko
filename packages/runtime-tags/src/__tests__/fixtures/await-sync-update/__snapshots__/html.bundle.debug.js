// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_await($scope0_id, "#text/0", `v${n}`, (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: <!>${_escape(value)}${_el_resume($scope1_id, "#text/0")}`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "2:2");
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
