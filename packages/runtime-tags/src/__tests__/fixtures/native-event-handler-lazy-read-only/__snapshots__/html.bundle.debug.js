// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let log = "";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<button class=show>show</button>${_el_resume($scope0_id, "#button/1")}<div class=log>${_escape(log)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		log
	}, "__tests__/template.marko", 0, {
		count: "2:6",
		log: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
