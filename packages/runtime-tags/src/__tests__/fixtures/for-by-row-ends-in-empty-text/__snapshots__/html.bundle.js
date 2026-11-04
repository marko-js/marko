// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }];
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		if (item.id > 9) {
			_scope_id();
			_html("big");
		} else {
			_scope_id();
			_html("<section></section>");
		}
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a");
	_html(`<button>add</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: items });
}, 1);
