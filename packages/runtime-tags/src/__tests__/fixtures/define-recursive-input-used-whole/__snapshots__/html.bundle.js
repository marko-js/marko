// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tree = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason(170);
				const $childScope = _peek_scope_id();
				Tree.content({
					depth: input.depth - 1,
					label: input.label
				});
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a");
		_html(`<span>${_text_mark($scope1_id, "b", input.label)}:${_text_mark($scope1_id, "c", Object.keys(input).join(","), 2)}</span>`);
		_scope($scope1_id, {
			f: input.depth,
			g: input.label
		});
	}, $scope0_id) };
	let depth = 1;
	_set_scope_reason(170);
	const $childScope2 = _peek_scope_id();
	Tree.content({
		depth,
		label: "x"
	});
	_html(`<button>deeper</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: depth,
		a: _existing_scope($childScope2)
	});
}, 1);
