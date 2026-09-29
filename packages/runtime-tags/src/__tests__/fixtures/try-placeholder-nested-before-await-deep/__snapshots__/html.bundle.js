// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_try($scope3_id, "a", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_await($scope5_id, "a", resolveAfter("3", 2), (x) => {
					_scope_id();
					_html(`<span>${_escape(x)}</span>`);
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("3 loading");
			}, void 0, "a0");
			_await($scope3_id, "b", resolveAfter("2", 3), (x) => {
				_scope_id();
				_html(`<b>${_escape(x)}</b>`);
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("2 loading");
		}, void 0, "a1");
		_await($scope1_id, "b", resolveAfter("1", 1), (x) => {
			_scope_id();
			_html(`<div>${_escape(x)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("1 loading");
	}, void 0, "a2");
}, 1);
