// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forTo(2, 1, 1, (i) => {
		const $scope1_id = _scope_id();
		({ content: _content("a0", ({ q }) => {
			_scope_id();
			_scope_reason();
			_html(`<span>${_escape(i > q)}</span>`);
		}, $scope1_id) }).content({ q: 1 });
	});
}, 1);
