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
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		log_effect_default({ id: "b" });
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("x", 1), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			log_effect_default({ id: (() => {
				throw new Error("P");
			})() });
		}, void 0, "a0");
		_await($scope1_id, "c", resolveAfter("y", 2), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a1");
	log_effect_default({ id: "z" });
}, 1);
