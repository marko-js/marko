// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let log = "";
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "a")}<button class=snap>snap</button>${_el_resume($scope0_id, "b")}<div class=n>${_text_resume($scope0_id, "c", n)}</div><div class=log>${_text_resume($scope0_id, "d", log)}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: n,
		f: log
	});
	_resume_branch($scope0_id);
}, 1);
