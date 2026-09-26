// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("outer", 1), (outer) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(outer)}</p>`);
			_await($scope3_id, "b", resolveAfter("inner", 2), (inner) => {
				_scope_id();
				_html(`<p>${_escape(inner)}</p>`);
			}, 0);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
}, 1);
