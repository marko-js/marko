// tags/c2.marko
var c2_default = _template("__tests__/tags/c2.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forOf([{ id: 1 }], (it) => {
		const $scope1_id = _scope_id();
		_script($scope1_id, "__tests__/tags/c2.marko_1", 0);
		_resume_branch($scope1_id);
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_for_of(items, (it) => {
		const $scope1_id = _scope_id();
		c2_default({});
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0");
	_html(`<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
