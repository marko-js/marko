// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		"a",
		"b",
		"c"
	];
	_html(`<div>${_escape(items[0])}${_el_resume($scope0_id, "a")}</div><div>${_escape(items[0])}${_el_resume($scope0_id, "b")}</div><button>Update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: items,
		f: void 0
	});
	_resume_branch($scope0_id);
}, 1);
