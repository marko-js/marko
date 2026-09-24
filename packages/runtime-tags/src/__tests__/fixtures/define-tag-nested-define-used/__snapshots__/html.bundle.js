// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	({ content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const Inner = { content: _content("a0", () => {
			_scope_id();
			_scope_reason();
			_html("<span>inner</span>");
		}, $scope1_id) };
		_html("<div>");
		Inner.content({});
		_html("</div>");
	}, _scope_id()) }).content({});
}, 1);
