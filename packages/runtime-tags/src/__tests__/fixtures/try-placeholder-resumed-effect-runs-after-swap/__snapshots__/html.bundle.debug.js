// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("a", 1), (a) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_escape(a)}</span>${_el_resume($scope3_id, "#span/0")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
		});
		_await($scope1_id, "#text/1", resolveAfter("b", 3), (b) => {
			const $scope4_id = _scope_id();
			_html(`<div>${_escape(b)}</div>`);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_await($scope0_id, "#text/1", resolveAfter("c", 2), (c) => {
		const $scope5_id = _scope_id();
		_html(`<p>${_escape(c)}</p>`);
	}, 0);
}, 1);
