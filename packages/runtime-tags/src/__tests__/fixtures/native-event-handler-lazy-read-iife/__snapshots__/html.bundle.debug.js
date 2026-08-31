// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let log = "";
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "#button/0")}<button class=snap>snap</button>${_el_resume($scope0_id, "#button/1")}<div class=n>${_text_resume($scope0_id, "#text/2", n)}</div><div class=log>${_text_resume($scope0_id, "#text/3", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_n#4_log#5");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		log
	}, "__tests__/template.marko", 0, {
		n: "2:6",
		log: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
