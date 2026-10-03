// tags/log-effect.marko
var log_effect_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	_scope($scope0_id, { c: input.id });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	log_effect_default({ id: "a" });
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("r", 1), (v) => {
			_scope_id();
			log_effect_default({ id: "r" });
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a0");
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		log_effect_default({ id: "p" });
		_await($scope4_id, "b", resolveAfter("q", 3), (v) => {
			_scope_id();
			log_effect_default({ id: "q" });
		}, 0);
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "a", err.message, $wg__err_message));
		_write_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, void 0, "a1");
}, 1);
