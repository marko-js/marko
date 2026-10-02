// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter("a", 1), (a) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_escape(a)}</p>`);
				_try($scope5_id, "#text/1", () => {
					_scope_reason();
					const $scope6_id = _scope_id();
					_await($scope6_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (b) => {
						const $scope8_id = _scope_id();
						_html(_escape(b));
					}, 0);
				}, () => {
					_scope_reason();
					const $scope7_id = _scope_id();
					_html("inner loading");
				}, void 0, "__tests__/template.marko_7*content");
				_script($scope5_id, "__tests__/template.marko_5", 0);
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "14:6");
		}, void 0, "__tests__/template.marko_4*content");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/1", resolveAfter("done", 2), (done) => {
		const $scope9_id = _scope_id();
		_html(_escape(done));
	}, 0);
}, 1);
