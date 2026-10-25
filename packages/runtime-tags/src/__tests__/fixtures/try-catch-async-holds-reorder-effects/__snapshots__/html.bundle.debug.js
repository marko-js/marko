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
	log_effect_default({ id: "a" });
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("r", 1), (v) => {
			const $scope3_id = _scope_id();
			log_effect_default({ id: "r" });
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		log_effect_default({ id: "p" });
		_await($scope4_id, "#text/1", resolveAfter("q", 3), (v) => {
			const $scope6_id = _scope_id();
			log_effect_default({ id: "q" });
		}, 0);
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "#text/0", err.message, $wg__err_message));
		_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "16:4");
	}, void 0, "__tests__/template.marko_5*content");
}, 1);
