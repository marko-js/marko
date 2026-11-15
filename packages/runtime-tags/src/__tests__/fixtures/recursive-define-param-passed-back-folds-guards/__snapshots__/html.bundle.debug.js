// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Countdown = { content: _content("__tests__/template.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_escape(depth)}</span>`);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Countdown.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "#text/1", 0, 0);
	}, $scope0_id) };
	Countdown.content({ depth: 1 });
}, 1);
