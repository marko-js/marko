// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const m = n * 2;
	_html_opens("__tests__/template.marko:2:1", "__tests__/template.marko:6:3", "__tests__/template.marko:7:3"), _html(`<div>Hello  World <button>click</button>${_el_resume($scope0_id, "#button/0")}<span>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</span></div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		m
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		m: "4:10"
	});
	_resume_branch($scope0_id);
}, 1);
