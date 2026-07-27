// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { greeting } = input;
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<div id=out></div>`);
	_script($scope0_id, "__tests__/template.marko_0_greeting_count");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		greeting,
		count
	}, "__tests__/template.marko", 0, {
		greeting: "1:10",
		count: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
