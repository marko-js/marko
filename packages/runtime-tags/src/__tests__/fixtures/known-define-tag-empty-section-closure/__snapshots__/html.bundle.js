// tags/test.marko
var test_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const count = 123;
	({ content: _content("b0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.x) {
				_scope_id();
				_html(`<div>${_escape(count)}</div>`);
				return 0;
			}
		}, $scope1_id, "a", 0, 0, 0, 0, 1);
	}, $scope0_id) }).content({ x: 1 });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
