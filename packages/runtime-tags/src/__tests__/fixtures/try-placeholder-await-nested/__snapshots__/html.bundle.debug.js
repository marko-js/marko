// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("outer", 1), (outer) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(outer)}</p>`);
			_await($scope3_id, "#text/1", resolveAfter("inner", 2), (inner) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_escape(inner)}</p>`);
			}, 0);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
}, 1);
