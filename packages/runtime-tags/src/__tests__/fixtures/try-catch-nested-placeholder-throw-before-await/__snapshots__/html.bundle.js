// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_await($scope4_id, "a", resolveAfter("inner", 1), (x) => {
				_scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			_html(`inner loading ${_escape((() => {
				throw new Error("inner placeholder");
			})())}`);
		}, void 0, "a0");
		_await($scope1_id, "b", resolveAfter("outer", 2), (y) => {
			_scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer loading");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`caught ${_text_resume($scope3_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "a1", "a2");
}, 1);
