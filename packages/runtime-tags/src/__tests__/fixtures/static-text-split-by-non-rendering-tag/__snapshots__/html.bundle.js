// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const m = n * 2;
	_html(`<div>Hello  World <button>click</button>${_el_resume($scope0_id, "a")}<span>${_escape(n)}${_el_resume($scope0_id, "b")}</span></div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: n,
		d: m
	});
	_resume_branch($scope0_id);
}, 1);
