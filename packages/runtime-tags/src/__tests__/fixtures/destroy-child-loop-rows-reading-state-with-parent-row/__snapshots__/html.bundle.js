// tags/c2.marko
var c2_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_for_of([{ id: 1 }], (it) => {
		const $scope1_id = _scope_id();
		_script($scope1_id, "b0", 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope1_id);
	}, (item) => item.id, $scope0_id, "a", 1, 0);
	_html(`<button class=inc></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, { c: n });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of([{ id: 1 }, { id: 2 }], (it) => {
		const $scope1_id = _scope_id();
		c2_default({});
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a");
	_html(`<button id=clear></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
