// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("a", 1), (a) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_escape(a)}</span>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a0");
			_scope($scope3_id, {});
		});
		_await($scope1_id, "b", resolveAfter("b", 3), (b) => {
			_scope_id();
			_html(`<div>${_escape(b)}</div>`);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_await($scope0_id, "b", resolveAfter("c", 2), (c) => {
		_scope_id();
		_html(`<p>${_escape(c)}</p>`);
	}, 0);
}, 1);
