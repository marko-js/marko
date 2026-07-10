// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = input.items;
	_html(`<button>reverse</button>${_el_resume($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(item.name)}${_el_resume($scope1_id, "a")}</span>`);
		writeScope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, 1, 1, 0, 1, 1);
	_for_of(items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<em>${_escape(item.name)}${_el_resume($scope2_id, "a")}</em>`);
		writeScope($scope2_id, {});
	}, (item) => item.id, $scope0_id, "c", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: items });
	_resume_branch($scope0_id);
}, 1);
