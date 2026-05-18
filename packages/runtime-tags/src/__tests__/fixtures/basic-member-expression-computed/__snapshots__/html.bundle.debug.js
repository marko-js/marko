// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		"a",
		"b",
		"c"
	];
	let index = 0;
	_html(`<div>${_escape(items[0])}${_el_resume($scope0_id, "#text/0")}</div><div>${_escape(items[index])}${_el_resume($scope0_id, "#text/1")}</div><button>Update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_items_index");
	writeScope($scope0_id, {
		items,
		index
	}, "__tests__/template.marko", 0, {
		items: "1:5",
		index: "2:5"
	});
	_resume_branch($scope0_id);
}, 1);
