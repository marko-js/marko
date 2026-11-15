// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Item = { content: _content("a0", ({ depth }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (depth) {
				_scope_id();
				_set_scope_reason(0);
				Item.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "a", 0, 0);
		_html(`<button>${_escape(depth)}</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, { f: depth });
	}, $scope0_id) };
	Item.content({ depth: 2 });
}, 1);
