// tags/log-effect.marko
var log_effect_default = _template("__tests__/tags/log-effect.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/log-effect.marko_0_input_id#2", 0);
	_scope($scope0_id, { input_id: input.id }, "__tests__/tags/log-effect.marko", 0, { input_id: ["input.id"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	log_effect_default({ id: "before" });
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			log_effect_default({ id: "caught" });
			_try($scope3_id, "#text/1", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_await($scope5_id, "#text/0", resolveAfter("x", 1), (v) => {
					const $scope7_id = _scope_id();
					_html(_escape(v));
				}, 0);
			}, () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html(_escape((() => {
					throw new Error("inner placeholder");
				})()));
			}, void 0, "__tests__/template.marko_6*content");
			_await($scope3_id, "#text/2", resolveAfter("y", 2), (v) => {
				const $scope8_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("loading");
		}, void 0, "__tests__/template.marko_4*content");
		_await($scope1_id, "#text/1", resolveAfter("z", 3), (v) => {
			const $scope9_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "16:4");
	}, void 0, "__tests__/template.marko_2*content");
	log_effect_default({ id: "after" });
}, 1);
