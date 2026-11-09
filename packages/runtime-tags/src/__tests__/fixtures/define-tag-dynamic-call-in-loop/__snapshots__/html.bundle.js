// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forTo(1, 1, 1, (i) => {
		const $scope1_id = _scope_id();
		({ content: _content("a0", ({ q }) => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_mark($scope2_id, "a", i > q, 0));
		}, $scope1_id) }).content({});
		_scope($scope1_id, { M: i });
	});
}, 1);
