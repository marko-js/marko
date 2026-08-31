// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		"a",
		"b",
		"c"
	];
	let index = 0;
	_html(`<div>${_text_resume($scope0_id, "a", items[0])}</div><div>${_text_resume($scope0_id, "b", items[index])}</div><button>Update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: items,
		f: index
	});
	_resume_branch($scope0_id);
}, 1);
