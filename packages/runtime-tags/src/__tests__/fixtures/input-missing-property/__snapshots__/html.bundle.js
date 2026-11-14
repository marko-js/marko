// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.count) {
				const $scope2_id = _scope_id();
				{
					const $scope3_id = _scope_id();
					_html(`<div>${_escape(input.name || "Fallback")}</div>`);
					_scope($scope3_id, { _: _scope_with_id($scope2_id) });
				}
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, { e: input.name });
	}, $scope0_id) };
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	Child.content({ count });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: count,
		c: _existing_scope($childScope)
	});
}, 1);
