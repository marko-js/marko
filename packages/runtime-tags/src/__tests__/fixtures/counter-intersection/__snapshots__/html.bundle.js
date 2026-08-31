// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	_html(`<div><button class=a>${_text_resume($scope0_id, "b", a)}</button>${_el_resume($scope0_id, "a")} + <button class=b>${_text_resume($scope0_id, "d", b)}</button>${_el_resume($scope0_id, "c")} = ${_text_resume($scope0_id, "e", 0, 2)}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		f: a,
		g: b
	});
	_resume_branch($scope0_id);
}, 1);
