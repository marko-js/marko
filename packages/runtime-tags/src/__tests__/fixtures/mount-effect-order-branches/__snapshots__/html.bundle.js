// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = [1, 2];
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_script($scope1_id, "a0", 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_for_of(items, (i) => {
		const $scope2_id = _scope_id();
		_script($scope2_id, "a1", 0);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "b");
	child_default({});
	_html(`<button>t</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: show,
		f: items
	});
}, 1);
