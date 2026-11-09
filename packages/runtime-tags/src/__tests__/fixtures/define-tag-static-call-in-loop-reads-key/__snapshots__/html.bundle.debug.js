// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forTo(2, 1, 1, (i) => {
		const $scope1_id = _scope_id();
		const D = { content: _content("__tests__/template.marko_2*content", ({ q }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<span>${_text_mark($scope2_id, "#text/0", i > q, 0)}</span>`);
		}, $scope1_id) };
		D.content({ q: 1 });
		_scope($scope1_id, { "#LoopKey": i }, "__tests__/template.marko", "1:2", { "#LoopKey": "1:6" });
	});
}, 1);
