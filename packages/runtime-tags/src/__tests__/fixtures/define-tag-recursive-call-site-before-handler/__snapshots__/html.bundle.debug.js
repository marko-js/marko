// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Item = { content: _content("__tests__/template.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Item.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0);
		_html(`<button>${_escape(depth)}</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { depth }, "__tests__/template.marko", "1:2", { depth: "1:16" });
	}, $scope0_id) };
	Item.content({ depth: 2 });
}, 1);
