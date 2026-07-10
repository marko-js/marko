// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const x = _id();
	let y = 0;
	_html(`<button>set</button>${_el_resume($scope0_id, "a")}<div${_attr("id", x)}>${_escape(y)}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: y });
	_resume_branch($scope0_id);
}, 1);
