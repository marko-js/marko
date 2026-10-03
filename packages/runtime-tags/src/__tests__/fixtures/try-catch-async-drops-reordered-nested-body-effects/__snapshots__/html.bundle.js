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
		_await($scope1_id, "a", resolveAfter("outer", 1), (v) => {
			const $scope3_id = _scope_id();
			log_effect_default({ id: "reordered" });
			_try($scope3_id, "b", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				log_effect_default({ id: "caught" });
				_await($scope4_id, "b", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 2), (x) => {
					_scope_id();
					_html(_escape(x));
				}, 0);
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught ${_text_resume($scope5_id, "a", err.message, $wg__err_message * 2)}`);
				_write_if($scope5_reason, 0) && _scope($scope5_id, {});
			}, void 0, "a0");
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a1");
	_await($scope0_id, "b", resolveAfter("done", 3), (done) => {
		_scope_id();
		_html(_escape(done));
	}, 0);
}, 1);
