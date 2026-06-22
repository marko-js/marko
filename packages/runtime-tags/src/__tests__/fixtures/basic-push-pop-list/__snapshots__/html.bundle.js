// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let id = 0;
	let items = [];
	_html("<div>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(item)}${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1, 1);
	_html(`<button id=add>Add</button>${_el_resume($scope0_id, "b")}<button id=remove>Remove</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: id,
		e: items
	});
	_resume_branch($scope0_id);
}, 1);
