// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>Clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "b")} times</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: clicks });
	_resume_branch($scope0_id);
}, 1);
