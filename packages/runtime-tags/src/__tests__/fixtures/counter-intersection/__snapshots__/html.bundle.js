// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	_html(`<div><button class=a>${_escape(a)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")} + <button class=b>${_escape(b)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")} = <!>${_escape(0)}${_el_resume($scope0_id, "e")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		f: a,
		g: b
	});
	_resume_branch($scope0_id);
}, 1);
