// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let direction = undefined;
	_html(`<button class=up>up</button>${_el_resume($scope0_id, "#button/0")}<button class=down>down</button>${_el_resume($scope0_id, "#button/1")}<button class=change>${_escape(x)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		x,
		direction
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		direction: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
