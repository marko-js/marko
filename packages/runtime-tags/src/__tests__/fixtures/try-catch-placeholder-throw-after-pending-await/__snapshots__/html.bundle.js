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
			_await($scope3_id, "a", resolveAfter("a", 2), (a) => {
				_scope_id();
				_html(_escape(a));
			}, 0);
			_try($scope3_id, "b", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_await($scope6_id, "a", resolveAfter("b", 3), (b) => {
					_scope_id();
					_html(_escape(b));
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html(_escape((() => {
					throw new Error("ERROR!");
				})()));
			}, void 0, "a0");
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "a", err.message, $wg__err_message * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "a1");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a2");
}, 1);
