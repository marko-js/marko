// tags/log-effect.marko
var log_effect_default = _template("__tests__/tags/log-effect.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/log-effect.marko_0", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		log_effect_default({});
		_try($scope1_id, "#text/1", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter("inner", 2), (v) => {
				const $scope5_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message2 = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(_text_resume($scope4_id, "#text/0", err.message, $wg__err_message2));
			_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "10:6");
		}, void 0, "__tests__/template.marko_4*content");
		_await($scope1_id, "#text/2", rejectAfter(new Error("ERROR!"), 1), (v) => {
			const $scope6_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", err.message, $wg__err_message));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "17:4");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
