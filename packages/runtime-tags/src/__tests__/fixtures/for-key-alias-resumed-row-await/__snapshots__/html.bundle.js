// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_if(() => {}, $scope1_id, "a");
		_scope($scope1_id, {
			c: item,
			M: index,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0);
	_html(`<button>show</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
