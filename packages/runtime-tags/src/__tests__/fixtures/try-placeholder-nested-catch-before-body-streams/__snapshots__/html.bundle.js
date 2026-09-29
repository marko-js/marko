// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", resolveAfter("a", 2), (a) => {
		_scope_id();
		_html(`<p>${_escape(a)}</p>`);
	}, 0);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_try($scope2_id, "a", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("inner"), 1), (x) => {
				_scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("caught");
		}, void 0, "a0");
		_await($scope2_id, "b", resolveAfter("outer", 3), (y) => {
			_scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer loading");
	}, void 0, "a1");
}, 1);
