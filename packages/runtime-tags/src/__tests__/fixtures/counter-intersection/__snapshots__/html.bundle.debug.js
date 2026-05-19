// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	_html(`<div><button class=a>${_escape(a)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")} + <button class=b>${_escape(b)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")} = <!>${_escape(a + b)}${_el_resume($scope0_id, "#text/4")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		a,
		b
	}, "__tests__/template.marko", 0, {
		a: "2:8",
		b: "3:8"
	});
	_resume_branch($scope0_id);
}, 1);
