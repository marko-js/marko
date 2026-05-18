// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button></button>${_el_resume($scope0_id, "a")}<div${_attr_style({
		display: void 0,
		border: "1px solid black"
	})}>foo bar</div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: open });
	_resume_branch($scope0_id);
}, 1);
