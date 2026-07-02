// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let direction = void 0;
	_html(`<button class=up>up</button>${_el_resume($scope0_id, "a")}<button class=down>down</button>${_el_resume($scope0_id, "b")}<button class=change>${_escape(x)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: x,
		f: direction
	});
	_resume_branch($scope0_id);
}, 1);
