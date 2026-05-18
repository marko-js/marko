// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let multiplier = 1;
	const multipliedCount = count * multiplier;
	_html(`<button id=multiplier>increase multiplier (<!>${_escape(multiplier)}${_el_resume($scope0_id, "#text/1")})</button>${_el_resume($scope0_id, "#button/0")}<button id=count>increase count</button>${_el_resume($scope0_id, "#button/2")}<div>${_escape(multipliedCount)}${_el_resume($scope0_id, "#text/3")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	_script($scope0_id, "__tests__/template.marko_0_multiplier");
	writeScope($scope0_id, {
		count,
		multiplier
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		multiplier: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
