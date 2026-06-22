// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let id = 0;
	let items = [];
	_html("<div>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(item)}${_el_resume($scope1_id, "#text/0")}`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "5:4");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1, 1);
	_html(`<button id=add>Add</button>${_el_resume($scope0_id, "#button/1")}<button id=remove>Remove</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_items");
	_script($scope0_id, "__tests__/template.marko_0_id_items");
	writeScope($scope0_id, {
		id,
		items
	}, "__tests__/template.marko", 0, {
		id: "2:8",
		items: "3:8"
	});
	_resume_branch($scope0_id);
}, 1);
